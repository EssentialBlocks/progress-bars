/**
 * True as soon as ANY part of the element is inside the viewport.
 *
 * The previous implementation required the element to be *entirely* within the
 * viewport (top >= 0 && bottom <= innerHeight). Any progress bar taller than the
 * viewport, or one the visitor scrolled partially past, never satisfied that and
 * so never animated — the bar stayed frozen at 0% on the frontend while the
 * editor (which animates unconditionally) looked correct.
 */
const isInViewport = function (elem) {
	var distance = elem.getBoundingClientRect();
	var viewportHeight =
		window.innerHeight || document.documentElement.clientHeight;
	var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

	return (
		distance.bottom > 0 &&
		distance.right > 0 &&
		distance.top < viewportHeight &&
		distance.left < viewportWidth
	);
};

const animate = function ({ duration, draw, timing }) {
	// A missing/invalid data-duration used to yield NaN here, which made
	// `timeFraction < 1` permanently true and left a requestAnimationFrame loop
	// spinning forever without ever completing the bar.
	let total = parseFloat(duration);
	if (!isFinite(total) || total <= 0) {
		total = 1500;
	}

	let start = performance.now();

	requestAnimationFrame(function animate(time) {
		let timeFraction = (time - start) / total;
		if (timeFraction > 1) timeFraction = 1;

		let progress = timing(timeFraction);

		draw(progress);

		if (timeFraction < 1) {
			requestAnimationFrame(animate);
		}
	});
};

/**
 * Run `fn` once the DOM is parsed.
 *
 * Binding straight to DOMContentLoaded meant that if this script ever executed
 * after that event had already fired — a deferred/async loading strategy, an
 * optimisation plugin, or a block injected after initial paint — the callback
 * never ran and no progress bar on the page animated.
 */
const onReady = function (fn) {
	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", fn);
	} else {
		fn();
	}
};

onReady(function () {
	var progressbars = document.querySelectorAll(".eb-progressbar");
	if (!progressbars || progressbars.length === 0) return;

	// function 'debounce' is used here for better performance when scroll event fires
	function debounce(func) {
		var wait =
			arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
		var immediate =
			arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
		var timeout;
		return function () {
			var context = this,
				args = arguments;

			function later() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			}

			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	}

	progressbars.forEach(function (progressbar) {
		var showedElement = false;
		var layout = progressbar.getAttribute("data-layout");
		var count = progressbar.getAttribute("data-count");
		var duration = progressbar.getAttribute("data-duration");

		function handleAnimationOnScroll() {
			setTimeout(function () {
				if (!showedElement && isInViewport(progressbar)) {
					animate({
						duration: duration,
						timing: function (timeFraction) {
							return timeFraction;
						},
						draw: function (progress) {
							var counter = Math.floor(progress * 100);
							if (counter <= count) {
								if (layout === "line" || layout === "line_rainbow") {
									progressbar.querySelector(
										".eb-progressbar-line-fill"
									).style.width = counter + "%";
								} else if (layout === "circle" || layout === "circle_fill") {
									var rotate = counter * 3.6;
									progressbar.querySelector(
										".eb-progressbar-circle-half-left"
									).style.transform = "rotate(" + rotate + "deg)";
									if (rotate > 180) {
										progressbar.querySelector(
											".eb-progressbar-circle-pie"
										).style.clipPath = "inset(0)";
										progressbar.querySelector(
											".eb-progressbar-circle-half-right"
										).style.visibility = "visible";
									}
								} else if (
									layout === "half_circle" ||
									layout === "half_circle_fill"
								) {
									var rotate = counter * 1.8;
									progressbar.querySelector(
										".eb-progressbar-circle-half"
									).style.transform = "rotate(" + rotate + "deg)";
								} else if (layout === "box") {
									progressbar.querySelector(
										".eb-progressbar-box-fill"
									).style.height = counter + "%";
								}
								if (progressbar.querySelector(".eb-progressbar-count")) {
									progressbar.querySelector(".eb-progressbar-count").innerText =
										counter;
								}
							}
						},
					});
					showedElement = true;
				}
			}, 20);
		}

		if (isInViewport(progressbar)) {
			handleAnimationOnScroll();
		}

		var debounced = debounce(handleAnimationOnScroll);
		// `resize` matters too: a bar can enter the viewport without any scroll
		// when the window grows or a device is rotated.
		window.addEventListener("scroll", debounced);
		window.addEventListener("resize", debounced);
	});
});

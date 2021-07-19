const isInViewport = function (elem) {
	var distance = elem.getBoundingClientRect();
	return (
		distance.top >= 0 &&
		distance.left >= 0 &&
		distance.bottom <=
			(window.innerHeight || document.documentElement.clientHeight) &&
		distance.right <=
			(window.innerWidth || document.documentElement.clientWidth)
	);
};

window.addEventListener("DOMContentLoaded", function (event) {
	var progressbars = document.querySelectorAll(".eb-progressbar");
	if (!progressbars) return;

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
			if (!showedElement && isInViewport(progressbar)) {
				if (layout == "line" || layout === "line_rainbow") {
					progressbar.querySelector(".eb-progressbar-line-fill").style.width =
						"unset";
				} else if (layout === "box") {
					progressbar.querySelector(".eb-progressbar-box-fill").style.height =
						"unset";
				} else if (layout === "circle" || layout === "circle_fill") {
					progressbar.querySelector(
						".eb-progressbar-circle-half-left"
					).style.transform = "rotate(0deg)";
					progressbar.querySelector(
						".eb-progressbar-circle-pie"
					).style.clipPath = "";
					progressbar.querySelector(
						".eb-progressbar-circle-half-right"
					).style.visibility = "";
				} else if (layout === "half_circle" || layout === "half_circle_fill") {
					progressbar.querySelector(
						".eb-progressbar-circle-half"
					).style.transform = "rotate(0deg)";
					progressbar.querySelector(
						".eb-progressbar-circle-half"
					).style.transition = "none";
				}
				showedElement = true;
				var i = 0;
				if (i == 0) {
					var width = 0;
					var counter = 0;
					var value = count;
					if (layout === "circle" || layout === "circle_fill") {
						value = count * 3.6;
					} else if (
						layout === "half_circle" ||
						layout === "half_circle_fill"
					) {
						value = count * 1.8;
					}
					var id = setInterval(frame, 10);
					function frame() {
						if (layout === "circle" || layout === "circle_fill") {
							if (width > 180) {
								progressbar.querySelector(
									".eb-progressbar-circle-pie"
								).style.clipPath = "inset(0)";
								progressbar.querySelector(
									".eb-progressbar-circle-half-right"
								).style.visibility = "visible";
							} else {
								progressbar.querySelector(
									".eb-progressbar-circle-pie"
								).style.clipPath = "";
								progressbar.querySelector(
									".eb-progressbar-circle-half-right"
								).style.visibility = "";
							}
						}
						if (width >= value) {
							clearInterval(id);
							i = 0;
						} else {
							width++;
							counter++;
							if (layout == "line" || layout === "line_rainbow") {
								progressbar.querySelector(
									".eb-progressbar-line-fill"
								).style.width = width + "%";
								progressbar.querySelector(
									".eb-progressbar-line-fill"
								).style.transitionDuration = duration + "ms";
							} else if (layout === "box") {
								progressbar.querySelector(
									".eb-progressbar-box-fill"
								).style.height = width + "%";
								progressbar.querySelector(
									".eb-progressbar-box-fill"
								).style.transitionDuration = duration + "ms";
							} else if (layout === "circle" || layout === "circle_fill") {
								progressbar.querySelector(
									".eb-progressbar-circle-half-left"
								).style.transform = "rotate(" + width + "deg)";
							} else if (
								layout === "half_circle" ||
								layout === "half_circle_fill"
							) {
								progressbar.querySelector(
									".eb-progressbar-circle-half"
								).style.transform = "rotate(" + width + "deg)";
								progressbar.querySelector(
									".eb-progressbar-circle-half"
								).style.transition = duration + "ms";
							}
							// progressbar
							// 	.querySelector(".eb-progressbar-count")
							// 	.textContent(counter);
						}
					}
				}
			}
		}

		if (isInViewport(progressbar)) {
			handleAnimationOnScroll();
		}

		window.addEventListener("scroll", debounce(handleAnimationOnScroll));
	});
});

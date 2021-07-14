var isInViewport = function (elem) {
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

var findMe = document.querySelector(".eb-progessbar");

console.log(findMe);

window.addEventListener(
	"scroll",
	function (event) {
		var findMe = document.querySelector(".eb-progessbar");
		if (isInViewport(findMe)) {
			console.log("Hello! ");
			findMe.classList.add("animate-progrss-bar");
		}
	},
	false
);

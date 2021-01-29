const durationInput = document.querySelector("#duration");
const startButtton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const circle = document.querySelector("circle");

const radius = circle.getAttribute("r");
const perimeter = 2 * Math.PI * radius;
circle.setAttribute("stroke-dasharray", perimeter);
let currentOffset = 0;

const timer = new Timer(durationInput, startButtton, pauseButton, {
	onStart(durationInput) {
		duration = durationInput;
	},
	onTick(timeRemaining) {
		circle.setAttribute(
			"stroke-dashoffset",
			perimeter * timeRemaining / duration - perimeter
		);
	},
	onComplete() {
		circle.setAttribute("stroke-dashoffset", currentOffset);
	}
});

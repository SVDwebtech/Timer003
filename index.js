const durationInput = document.querySelector("#duration");
const startButtton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(durationInput, startButtton, pauseButton, {
	onStart() {
		console.log("timer started");
	},
	onTick() {
		console.log("timer ticked");
	},
	onComplete() {
		console.log("timer complete");
	}
});

class Counter {
	constructor(options) {
		this.idButtonStart = options.idButtonStart;
		this.startButton = document.getElementById(this.idButtonStart);
		this.idButtonStop = options.idButtonStop;
		this.stopButton = document.getElementById(this.idButtonStop);
		this.idButtonReset = options.idButtonReset;
		this.resetButton = document.getElementById(this.idButtonReset);
		this.output = document.getElementById('timer');
		this.seconds = 0;
		this.counter;

	}

	init() {
		this.startButton.addEventListener('click', () => { //start button trigger
			this.startButton.disabled = 'true';
			this.counter = setInterval(() => { this.startCounter() }, 1000);
		});
		this.resetButton.addEventListener('click', () => { //reset button trigger
			this.startButton.disabled = false;
			clearInterval(this.counter);
			this.seconds = 0;
			this.startCounter();
		});
		this.stopButton.addEventListener('click', () => { //stop button trigger
			this.startButton.disabled = false;
			clearInterval(this.counter);
		});
	}

	startCounter() {
		let secs = Math.floor(this.seconds % 60);
		let minutes = Math.floor((this.seconds % 3600) / 60);
		let hours = Math.floor(this.seconds / 3600);

		let displaySeconds = (secs < 10) ? '0' + secs : secs;
		let displayMinutes = (minutes < 10) ? '0' + minutes : minutes;
		let displayHours = (hours < 10) ? '0' + hours : hours;
		this.output.innerHTML = displayHours + ':' + displayMinutes + ':' + displaySeconds;
		// this.output.innerHTML = 'gata';
		this.seconds++;
	}


}


const counter = new Counter({
	idButtonStart: 'button-counter',
	idButtonReset: 'button-reset',
	idButtonStop: 'button-stop'
});

counter.init();
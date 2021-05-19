class Counter {
	constructor(options) {
		this.idButton = options.idButton;
		this.startButton = document.getElementById(this.idButton);
		this.output = document.getElementById('timer');
		this.seconds = 0;
		
	}
	
	init() {
		this.startButton.addEventListener('click', () => {
			this.startButton.disabled = 'true';
			let counter = setInterval(this.startCounter, 1000)			
		});
	}
	
	startCounter() {
			let secs = Math.floor(this.seconds % 60);
			let minutes = Math.floor((this.seconds % 3600)/60);
			let hours = Math.floor(this.seconds / 3600);

			let displaySeconds = (secs < 10) ? '0' + secs : secs;
			let displayMinutes = (minutes < 10) ? '0' + minutes : minutes;
			let displayHours = (hours < 10) ? '0' + hours : hours;
			// this.output.innerHTML = displayHours + ':' + displayMinutes + ':' + displaySeconds;
			this.output.innerHTML = 'gata';
			this.seconds++;
	}
		
	
}


const counter = new Counter({
	idButton: 'button-counter'
});

counter.init();
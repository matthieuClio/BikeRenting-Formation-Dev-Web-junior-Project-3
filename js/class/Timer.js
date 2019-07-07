class Timer {

	timerBooked;
	minElt = document.getElementById("min");
	secElt = document.getElementById("sec");
	// Object
	canvas = new Canvas(); // js/class/Canvas.js

	constructor() {
		let timerBooked = this.timerBooked;
		let minElt = this.minElt;
		let secElt = this.secElt;
		let canvas = this.canvas; // js/class/Canvas.js
	}

	running() {
		let minElt = this.minElt;
		let secElt = this.secElt;
		let timerBooked = this.timerBooked;
		this.timerBooked = setInterval(timerRule, 1000);

		function timerRule() {

			if(sessionStorage.timerMin) {

				if(sessionStorage.timerMin != 0 || sessionStorage.timerMin == 0 && sessionStorage.timerSec != 0) {

					if(sessionStorage.timerSec == 0) {
						sessionStorage.timerMin--;
						sessionStorage.timerSec = 59;

						minElt.textContent = sessionStorage.timerMin + " min ";
						secElt.textContent = sessionStorage.timerSec + "s ";
					}
					else {
						sessionStorage.timerSec--;
						secElt.textContent = sessionStorage.timerSec + "s ";
					}
				}
				else {
					clearInterval(timerBooked);
					canvas.deleteBooking();
				}
			}
			else {
				clearInterval(timerBooked);
			}
		} // End function timerRule
	} // End method running

} // End class Timer
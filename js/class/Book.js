"use strict";

// Class Book
//...
//...
//...

class Book {

		booking_dataElt = document.getElementById("address_st"); // Booking adress
		booking_sectionElt = document.getElementById("booked"); // Booking location
		input_nameElt = document.getElementById("name");
		input_first_nameElt = document.getElementById("firstName");
		inputDeleteElt = document.getElementById("input_deleteId");
		timerSectionElt = document.getElementById("timer_section");
		timerElt = document.getElementById("timer");
		minElt = document.getElementById("min");
		secElt = document.getElementById("sec");
		timerMin = 20;
		timerSec = '00';

	constructor() {
		var booking_dataElt = this.booking_dataElt;
		var booking_sectionElt = this.booking_dataElt;
		var input_nameElt = this.input_nameElt;
		var input_first_nameElt = this.nput_first_nameElt;
		var inputDeleteElt = this.inputDeleteElt;
		var timerSectionElt = this.imerSectionElt;
		var timerElt = this.timerElt;
		var minElt = this.minElt;
		var secElt = this.ecElt;
		var timerMin = this.timerMin;
		var timerSec = this.timerSec;
	}

	addBooking() {
		/*var booking_dataElt = document.getElementById("address_st"); // Booking adress
		var booking_sectionElt = document.getElementById("booked"); // Booking location
		var input_nameElt = document.getElementById("name");
		var input_first_nameElt = document.getElementById("firstName");
		var inputDeleteElt = document.getElementById("input_deleteId");
		var timerSectionElt = document.getElementById("timer_section");
		var timerElt = document.getElementById("timer");
		var minElt = document.getElementById("min");
		var secElt = document.getElementById("sec");

		var timerMin = 20;
		var timerSec = '00'; */

		//console.log(input_nameElt);
		localStorage.setItem("name", this.input_nameElt.value);
		localStorage.setItem("first_name", this.input_first_nameElt.value);
		sessionStorage.setItem("booking", this.booking_dataElt.textContent + ", Réservé par: " + this.input_nameElt.value + " " + this.input_first_nameElt.value);
		sessionStorage.setItem("timerMin", this.timerMin);
		sessionStorage.setItem("timerSec", this.timerSec);

		this.booking_sectionElt.textContent = sessionStorage.booking;
		this.timerElt.textContent = "Temps restant: ";
		this.minElt.textContent = sessionStorage.timerMin + " min ";
		this.secElt.textContent = sessionStorage.timerSec + "s ";

		this.timerSectionElt.style.display = "block";
		this.inputDeleteElt.style.display = "inline-block";

		// Start the timer
		this.timer();
	}

	deleteBooking() {
		var booking_sectionElt = document.getElementById("booked"); // Booking location
		var input_delete = document.getElementById("input_deleteId");
		var timerSectionElt = document.getElementById("timer_section");

		booking_sectionElt.textContent = "Pas de réservation";
		input_delete.style.display = "none";
		timerSectionElt.style.display = "none";
		sessionStorage.clear();
	}

	inputDeleteBooking() {
		var input_delete = document.getElementById("input_deleteId");
		
		input_delete.onclick = function() {
            this.deleteBooking();
        }
	}

	timer() {
		var timerBooked;
		timerBooked = setInterval(timerRule, 1000);

		function timerRule() {
			var minElt = document.getElementById("min");
			var secElt = document.getElementById("sec");

			if(sessionStorage.timerMin) {

				if(sessionStorage.timerMin != 0 || sessionStorage.timerMin == 0 && sessionStorage.timerSec != 0) {

					if(sessionStorage.timerSec == 0) {
						sessionStorage.timerMin--;
						sessionStorage.timerSec = 60;

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
					this.deleteBooking();
				}
			}
			else {
				clearInterval(timerBooked);
			}
		} // End function timerRule
	} // End method timer

	bookingButton() {
		var canvas_containerElt = document.querySelector("canvas");
		var formElt = document.getElementById("form_");
		var inputCancel = document.getElementById("input_cancel");
		var inputErase = document.getElementById("input_erase");
		var inputValidate = document.getElementById("input_validate");
        var canvas = new Canvas(); // js/class/Canvas.js
        var booked = false;

        formElt.addEventListener("submit", function(evenement) {
            evenement.preventDefault();

            var statusBikeInfoElt = document.getElementById("status_bike");

            /([0-9]+)/.exec(statusBikeInfoElt.textContent);

            var nbBike = RegExp.$1;


            if(nbBike > 1) {

                var canvasActivation = canvas.running();

                // Available the booking
                canvas_containerElt.onclick = function() {
                	booked = true;
                }

                // Close canvas
                inputCancel.onclick = function() {
					canvas.resetText(); // Delete error message
					canvas.cancelCanvas();
				}
				// Clean the canvas
				inputErase.onclick = function() {
					canvas.resetText(); // Delete error message
					canvas.resize();
				}

				// Browser resizing
				window.onresize = canvas.resize();

				inputValidate.onclick = function() {
					if(booked) {
						canvas.validationCanvas();
						this.deleteBooking(); // Delete a previous booking
						canvas.cancelCanvas();
						setTimeout(this.addBooking, 1500); // Have time to delete a booking before adding
					}
					else {
						canvas.errorCanvas();
					}
				} // End inputValidate



            } // End if nbBike
            else {
                alert('Aucun vélo disponible.');
            }
        } );
	}

	inputPageRefresh() {

		var input_name = document.getElementById("name");
        var input_first_name = document.getElementById("firstName");
        
	    if(localStorage.name && localStorage.first_name) {
			input_name.value = localStorage.name;
	        input_first_name.value = localStorage.first_name;
	    }
	}

	bookingPageRefresh() {

		var booking_section = document.getElementById("booked");
        var input_delete = document.getElementById("input_deleteId");
        var timerSectionElt = document.getElementById("timer_section");
        var timerElt = document.getElementById("timer");
        var minElt = document.getElementById("min");
        var secElt = document.getElementById("sec");

        if(sessionStorage.booking) {
        	booking_section.textContent = sessionStorage.booking;
	        input_delete.style.display = "inline-block";

	        timerSectionElt.style.display = "block";
	        timerElt.textContent = "Temps restant: ";
	        minElt.textContent = sessionStorage.timerMin + " min ";
	        secElt.textContent = sessionStorage.timerSec + "s ";
	        this.timer();
        }

	} // End bookingPageRefresh

} // End class Book
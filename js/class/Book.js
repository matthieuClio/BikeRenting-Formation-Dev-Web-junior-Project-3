"use strict";

// Class Book
//...
//...
//...

class Book {
		canvas_containerElt = document.querySelector("canvas");
		formElt = document.getElementById("form_");
		inputCancel = document.getElementById("input_cancel");
		inputErase = document.getElementById("input_erase");
		inputValidate = document.getElementById("input_validate");
		input_name = document.getElementById("name");
        input_first_name = document.getElementById("firstName");
        booking_section = document.getElementById("booked");
		booking_dataElt = document.getElementById("address_st"); // Booking adress
		booking_sectionElt = document.getElementById("booked"); // Booking location
		input_nameElt = document.getElementById("name");
		input_first_nameElt = document.getElementById("firstName");
		inputDeleteElt = document.getElementById("input_deleteId");
		timerSectionElt = document.getElementById("timer_section");
		timerElt = document.getElementById("timer");
		minElt = document.getElementById("min");
		secElt = document.getElementById("sec");
		input_delete = document.getElementById("input_deleteId");
		booked = false;
		timerMin = 20;
		timerSec = '00';
		// Object
		canvas = new Canvas(); // js/class/Canvas.js
		timer = new Timer();

	constructor() {
		let canvas_containerElt = this.canvas_containerElt;
		let formElt = this.formElt;
		let inputCancel = this.inputCancel;
		let inputErase = this.inputErase;
		let inputValidate = this.inputValidate;
		let input_name = this.input_name;
		let input_first_name = this.input_first_name;
		let booking_section = this.booking_section;
		let booking_dataElt = this.booking_dataElt;
		let booking_sectionElt = this.booking_dataElt;
		let input_nameElt = this.input_nameElt;
		let input_first_nameElt = this.nput_first_nameElt;
		let inputDeleteElt = this.inputDeleteElt;
		let timerSectionElt = this.imerSectionElt;
		let timerElt = this.timerElt;
		let minElt = this.minElt;
		let secElt = this.ecElt;
		let input_delete = this.input_delete;
		let booked = this.booked;
		let timerMin = this.timerMin;
		let timerSec = this.timerSec;
		// Object
		let canvas = this.canvas; // js/class/Canvas.js
		let timer = this.timer;
		
	}

	inputDeleteBooking() {

		let canvas = this.canvas;
		
		this.input_delete.onclick = function() {
            canvas.deleteBooking();
        }
	}

	bookingButton() {

		let canvas_containerElt = this.canvas_containerElt;
		let inputCancel = this.inputCancel;
		let inputErase = this.inputErase;
		let inputValidate = this.inputValidate;
        let canvas = this.canvas // js/class/Canvas.js
        let timer = this.timer // js/class/Timer.js
        let booked = this.booked;

        this.formElt.addEventListener("submit", function(evenement) {
            evenement.preventDefault();

            var statusBikeInfoElt = document.getElementById("status_bike");

            /([0-9]+)/.exec(statusBikeInfoElt.textContent);

            var nbBike = RegExp.$1;


            if(nbBike > 0) {

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
						canvas.deleteBooking(); // Delete a previous booking
						canvas.cancelCanvas();
						canvas.addBooking();
						timer.running();
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
        
	    if(localStorage.name && localStorage.first_name) {
			this.input_name.value = localStorage.name;
	        this.input_first_name.value = localStorage.first_name;
	    }
	}

	bookingPageRefresh() {

        if(sessionStorage.booking) {
        	this.booking_section.textContent = sessionStorage.booking;
	        this.input_delete.style.display = "inline-block";

	        this.timerSectionElt.style.display = "block";
	        this.timerElt.textContent = "Temps restant: ";
	        this.minElt.textContent = sessionStorage.timerMin + " min ";
	        this.secElt.textContent = sessionStorage.timerSec + "s ";
	        this.timer.running();
        }

	} // End bookingPageRefresh

} // End class Book
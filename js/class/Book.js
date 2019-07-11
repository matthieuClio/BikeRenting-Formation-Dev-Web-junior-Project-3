"use strict";

// Class Book
//...
//...
//...

class Book {

	constructor() {
		this.canvas_containerElt = document.querySelector("canvas");
		this.formElt = document.getElementById("form_");
		this.inputCancel = document.getElementById("input_cancel");
		this.inputErase = document.getElementById("input_erase");
		this.inputValidate = document.getElementById("input_validate");
		this.input_name = document.getElementById("name");
        this.input_first_name = document.getElementById("firstName");
        this.booking_section = document.getElementById("booked");
		this.booking_dataElt = document.getElementById("address_st"); // Booking adress
		this.booking_sectionElt = document.getElementById("booked"); // Booking location
		this.input_nameElt = document.getElementById("name");
		this.input_first_nameElt = document.getElementById("firstName");
		this.inputDeleteElt = document.getElementById("input_deleteId");
		this.timerSectionElt = document.getElementById("timer_section");
		this.timerElt = document.getElementById("timer");
		this.minElt = document.getElementById("min");
		this.secElt = document.getElementById("sec");
		this.input_delete = document.getElementById("input_deleteId");
		this.statusBikeInfoElt = document.getElementById("status_bike");
		this.booked = false;
		this.timerMin = 20;
		this.timerSec = '00';
		// Object
		this.canvas = new Canvas(); // js/class/Canvas.js
		this.timer = new Timer();
		
	}

	inputDeleteBooking() {
		
		this.input_delete.addEventListener("click", () =>{
            this.canvas.deleteBooking();
        });
	}

	bookingButton() {

        this.formElt.addEventListener("submit", (evenement) =>{
            evenement.preventDefault();

            /([0-9]+)/.exec(this.statusBikeInfoElt.textContent);

            let nbBike = RegExp.$1;


            if(nbBike > 0) {

                let canvasActivation = this.canvas.running();

                // Available the booking
                this.canvas_containerElt.addEventListener("click", () =>{
                //canvas_containerElt.onclick = function() {
                	this.booked = true;
                });
                this.canvas_containerElt.addEventListener("touchstart", () =>{
                	this.booked = true;
                });
                // Close canvas
                this.inputCancel.addEventListener("click", () =>{
					this.canvas.resetText(); // Delete error message
					this.canvas.cancelCanvas();
				});
				// Clean the canvas
				this.inputErase.addEventListener("click", () =>{
					this.canvas.resetText(); // Delete error message
					this.canvas.resize();

					this.booked = false;
				});

				// Browser resizing
				window.addEventListener("resize", () => {
					this.canvas.resize();
				});

				this.inputValidate.addEventListener("click", () =>{
					if(this.booked) {
						this.canvas.validationCanvas();
						this.canvas.deleteBooking(); // Delete a previous booking
						this.canvas.cancelCanvas();
						this.canvas.addBooking();
						this.timer.running();

						this.booked = false;
					}
					else {
						this.canvas.errorCanvas();
					}
				}); // End inputValidate

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
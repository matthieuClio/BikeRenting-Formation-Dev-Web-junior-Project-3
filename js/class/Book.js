"use strict";

// Class Book
//...
//...
//...

class Book {
	constructor() {
	}

	addBooking() {

		var booking_dataElt = document.getElementById("address_st"); // Booking adress
		var booking_sectionElt = document.getElementById("booked"); // Booking location
		var input_nameElt = document.getElementById("name");
		var input_first_nameElt = document.getElementById("firstName");
		var inputDeleteElt = document.getElementById("input_deleteId");
		var timerSectionElt = document.getElementById("timer_section");
		var timerElt = document.getElementById("timer");
		var minElt = document.getElementById("min");
		var secElt = document.getElementById("sec");

		var timerMin = 20;
		var timerSec = '00';

		localStorage.setItem("name", input_nameElt.value);
		localStorage.setItem("first_name", input_first_nameElt.value);
		sessionStorage.setItem("booking", booking_dataElt.textContent + ", Réservé par: " + input_nameElt.value + " " + input_first_nameElt.value);
		sessionStorage.setItem("timerMin", timerMin);
		sessionStorage.setItem("timerSec", timerSec);

		booking_sectionElt.textContent = sessionStorage.booking;
		timerElt.textContent = "Temps restant: ";
		minElt.textContent = sessionStorage.timerMin + " min ";
		secElt.textContent = sessionStorage.timerSec + "s ";

		timerSectionElt.style.display = "block";
		inputDeleteElt.style.display = "inline-block";

		// Start the timer
		bookObject.timer();
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
            bookObject.deleteBooking();
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
					bookObject.deleteBooking();
				}
			}
			else {
				clearInterval(timerBooked);
			}
		} // End function timerRule
	} // End method timer

	bookingButton() {
		var formElt = document.getElementById("form_");
        var canvas = new Canvas(); // js/class/Canvas.js

        formElt.addEventListener("submit", function(evenement) {
            evenement.preventDefault();

            var statusBikeInfoElt = document.getElementById("status_bike");

            /([0-9]+)/.exec(statusBikeInfoElt.textContent);

            var nbBike = RegExp.$1;

            if(nbBike > 1) {
                canvas.running();
            }
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
	        bookObject.timer();
        }

	} // End bookingPageRefresh

} // End class Book
"use strict";

// Class Canvas
//...
//...
//...

class Canvas {
	constructor() {
    }

    running() {
    	var canvas_container = document.getElementById("canvas_container");
		var canvas = document.querySelector("canvas");
		var error_message = document.getElementById("error_message");
		var inputCancel = document.getElementById("input_cancel");
		var inputErase = document.getElementById("input_erase");
		var inputValidate = document.getElementById("input_validate");


		var context = canvas.getContext('2d');
		var radius = 5; 
		var dragging = false;
		var booked = false;
		var bookObject = new Book();

		canvas_container.style.display = "block";
		canvas.width = window.innerWidth;
		canvas.height = "500";
		context.lineWidth = radius*2;

		function putPoint(e) {
			if(dragging) {

				if (screen.width > 1279) {
					context.lineTo(e.clientX, e.clientY);
					context.stroke();
					context.beginPath();
					context.arc(e.clientX, e.clientY, radius, 0, Math.PI*2);
					context.fill();
					context.beginPath();
					context.moveTo(e.clientX, e.clientY);
				}
				else if (screen.width <= 1279) {
					e.preventDefault();
					context.lineTo(e.touches[0].clientX, e.touches[0].clientY);
					context.stroke();
					context.beginPath();
					context.arc(e.touches[0].clientX, e.touches[0].clientY, radius, 0, Math.PI*2);
					context.fill();
					context.beginPath();
					context.moveTo(e.touches[0].clientX, e.touches[0].clientY);
				}
			}	// End dragging
			
		}	// End function putPoint

		function enalble(e) {
			booked = true;

			dragging = true;
			putPoint(e);
		}

		function disable() {
			dragging = false;
			context.beginPath();
		}

		function resize() {
			booked = false;

			canvas.width = window.innerWidth;
			canvas.height = "500";
			context.lineWidth = radius*2;
		}

		function cancelCanvas() {
			canvas_container.style.display = "none";
		}

		function resetText() {
			error_message.textContent = "";
		}

		if (screen.width > 1279) {
			// Event mouse on canvas
			canvas.addEventListener('mousedown', enalble);
			canvas.addEventListener('mousemove', putPoint);
			canvas.addEventListener('mouseup', disable);
			canvas.addEventListener("mouseout", disable);
		}

		// Dragging for tablet - Mobile
		else if (screen.width <= 1279) {

			// Event tactile on canvas
			canvas.addEventListener('touchstart', enalble);
			canvas.addEventListener('touchmove', putPoint);
			canvas.addEventListener('touchend', disable);
		}

		// Browser resizing
		window.onresize = resize;

		// Buttton Event
		inputCancel.onclick = function() {
			resetText(); // Delete error message
			cancelCanvas();
		}

		inputErase.onclick = function() {
			resetText(); // Delete error message
			resize();
		}

		inputValidate.onclick = function() {
			if(booked) {

				bookObject.deleteBooking(); // Delete a previous booking
				cancelCanvas();
				setTimeout(bookObject.addBooking, 1500); // Have time to delete a booking before adding
			}
			else {
				error_message.textContent = "Vous devez signer pour valider";
			}
		}

    } // End running()

} // End class Canvas
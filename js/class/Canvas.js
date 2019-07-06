"use strict";

// Class Canvas
//...
//...
//...

class Canvas {

	canvas = document.querySelector("canvas");
	canvas_container = document.getElementById("canvas_container");
	error_message = document.getElementById("error_message");
	booked = false;
	context = this.canvas.getContext('2d');
	radius = 5;
	dragging = false;


	constructor() {

		let canvas = this.canvas;
		let canvas_container = this.canvas_container;
		let error_message = this.error_message;
		let context = this.context;
		let radius = this.radius;
		let dragging = this.dragging;
    }

    // Method running
    running() {

		this.canvas_container.style.display = "block";
		this.canvas.width = window.innerWidth;
		this.canvas.height = "500";
		this.context.lineWidth = this.radius*2;

		// Define some variables for be used in functions !
		let dragging = this.dragging;
		let context = this.context;
		let radius = this.radius;


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
			dragging = true;
			putPoint(e);
		}

		function disable() {
			dragging = false;
			context.beginPath();
		}

		if (screen.width > 1279) {
			// Event mouse on canvas

			putPoint();

			this.canvas.addEventListener('mousedown', enalble);
			this.canvas.addEventListener('mousedown', putPoint);
			this.canvas.addEventListener('mousemove', putPoint);
			this.canvas.addEventListener('mouseup', disable);
			this.canvas.addEventListener("mouseout", disable);
		}

		// Dragging for tablet - Mobile
		else if (screen.width <= 1279) {

			// Event tactile on canvas
			this.canvas.addEventListener('touchstart', enalble);
			this.canvas.addEventListener('touchmove', putPoint);
			this.canvas.addEventListener('touchend', disable);
		}

    } // End running()

    // Method cancelCanvas
    cancelCanvas() {
    	this.canvas_container.style.display = "none";
    }

    // Method resetText
    resetText() {
    	this.error_message.textContent = "";
    }

    // Method resize
    resize() {
		this.canvas.width = window.innerWidth;
		this.canvas.height = "500";
		this.context.lineWidth = this.radius*2;
    }

    // Method validationCanvas
    validationCanvas() {
		this.canvas_container.style.display = "none";
    }
    
    // Method errorCanvas
    errorCanvas() {
    	this.error_message.textContent = "Vous devez signer pour valider";
    }

} // End class Canvas
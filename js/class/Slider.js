"use strict";

// Class Slider
//...
//...
//...

class Slider {
	constructor() {
	}

	// Default values
	maxLeft = 0;
	maxRight = -200;
	slideSize = 100;

	// Method
	running() {

		// Use default values
		var maxLeft = this.maxLeft;
		var maxRight = this.maxRight;
		var slideSize = this.slideSize;
		// Variable
		var nextSlide;
		var maxSlide = false;

		var sliderContainerElt = document.getElementById("slider_container");
		var rightButtonElt = document.getElementById("right_button");
		var leftButtonElt = document.getElementById("left_button");
		var containerMainElt = document.getElementById("container_main");
		var containerButtonElt = document.getElementById("container_button");
		var pauseButtonElt = document.getElementById("pause_button");
		var playButtonElt = document.getElementById("play_button");


		function automaticMode() {

			if(sliderContainerElt.style.left) {
				var leftSlider = sliderContainerElt.style.left;
			}
			else {
				var leftSlider = getComputedStyle(sliderContainerElt).left;
			}

			var leftSliderInt = parseInt(leftSlider); // Convert the strings into int

			if(leftSliderInt > maxRight && !maxSlide) {
				leftSliderInt = leftSliderInt-slideSize;
				sliderContainerElt.style.left = leftSliderInt + "%";

				if(leftSliderInt == maxRight) {
					maxSlide = true;
				}
			}
			else if(leftSliderInt < maxLeft && maxSlide) {
				leftSliderInt = leftSliderInt+slideSize;
				sliderContainerElt.style.left = leftSliderInt + "%";

				if(leftSliderInt == maxLeft) {
					maxSlide = false;
				}
			}
		} // End function automaticMode


		// Pause button
		//...
		var pause = false;

		containerMainElt.onmouseover = function(){
			containerButtonElt.style.display = "block";
		}

		containerMainElt.onmouseout = function(){
			containerButtonElt.style.display = "none";
		}

		containerButtonElt.onclick = function() {
			if(pause) {
				pauseButtonElt.style.display = "block";
				playButtonElt.style.display = "none";
				nextSlide = setInterval(automaticMode, 5000);
				pause = false;
			}
			else {
				pauseButtonElt.style.display = "none";
				playButtonElt.style.display = "block";
				clearInterval(nextSlide);
				pause = true;
			}
		}

		// Right button
		//...
		rightButtonElt.onclick = function() {

			if(sliderContainerElt.style.left) {
				var leftSlider = sliderContainerElt.style.left;
			}
			else {
				var leftSlider = getComputedStyle(sliderContainerElt).left;
			}

			var leftSliderInt = parseInt(leftSlider); //convert the input strings into int

			if(leftSliderInt > maxRight) {
				leftSliderInt = leftSliderInt-slideSize;
				sliderContainerElt.style.left = leftSliderInt + "%";

				if(leftSliderInt == maxRight) {
					maxSlide = true;
				}
			}
			// Pause button 
			pause = true;
			pauseButtonElt.style.display = "none";
			playButtonElt.style.display = "block";

			// Stop automaticMode
			clearInterval(nextSlide);
		}

		// Left button
		//...
		leftButtonElt.onclick = function() {

			if(sliderContainerElt.style.left) {
				var leftSlider = sliderContainerElt.style.left;
			}
			else {
				var leftSlider = getComputedStyle(sliderContainerElt).left;
			}

			var leftSliderInt = parseInt(leftSlider); //convert the input strings into int

			if(leftSliderInt < maxLeft) {
				leftSliderInt = leftSliderInt+slideSize;
				sliderContainerElt.style.left = leftSliderInt + "%";

				if(leftSliderInt == maxLeft) {
					maxSlide = false;
				}
			}
			// Pause button
			pause = true;
			pauseButtonElt.style.display = "none";
			playButtonElt.style.display = "block";

			// Stop automaticMode
			clearInterval(nextSlide);
		}

		// Keyboard
		//...
		containerMainElt.onkeydown = function() {
			console.log('39');
			if(event.keyCode == 39) { // KeyCode: right spire
				
				console.log('39');

				if(sliderContainerElt.style.left) {
					var leftSlider = sliderContainerElt.style.left;
				}
				else {
					var leftSlider = getComputedStyle(sliderContainerElt).left;
				}

				var leftSliderInt = parseInt(leftSlider); //convert the input strings into int

				if(leftSliderInt > maxRight) {
					leftSliderInt = leftSliderInt-slideSize;
					sliderContainerElt.style.left = leftSliderInt + "%";

					if(leftSliderInt == maxRight) {
						maxSlide = true;
					}
				}
				// Pause button
				pause = true;
				pauseButtonElt.style.display = "none";
				playButtonElt.style.display = "block";
				clearInterval(nextSlide);
			}

			else if(event.keyCode == 37) { // KeyCode: left spire
				
				console.log('37');
				
				if(sliderContainerElt.style.left) {
					var leftSlider = sliderContainerElt.style.left;
				}
				else {
					var leftSlider = getComputedStyle(sliderContainerElt).left;
				}

				var leftSliderInt = parseInt(leftSlider); //convert the input strings into int

				if(leftSliderInt < maxLeft) {
					leftSliderInt = leftSliderInt+slideSize;
					sliderContainerElt.style.left = leftSliderInt + "%";

					if(leftSliderInt == maxLeft) {
						maxSlide = false;
					}
				}
				// Pause button
				pause = true;
				pauseButtonElt.style.display = "none";
				playButtonElt.style.display = "block";
				clearInterval(nextSlide);
			}
		} // End containerMainElt.onkeydown

		nextSlide = setInterval(automaticMode, 5000);

	} // End method running


} // End class Slider
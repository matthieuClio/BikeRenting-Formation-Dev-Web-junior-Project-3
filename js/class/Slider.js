"use strict";

// Class Slider
//...
//...
//...

class Slider {

	

	constructor() {
		// Default values
		this.maxLeft = 0;
		this.maxRight = -200;
		this.slideSize = 100;
		this.nextSlide;
		this.maxSlide = false;
		this.pause = false;
		this.sliderContainerElt = document.getElementById("slider_container");
		this.rightButtonElt = document.getElementById("right_button");
		this.leftButtonElt = document.getElementById("left_button");
		this.containerMainElt = document.getElementById("container_main");
		this.containerButtonElt = document.getElementById("container_button");
		this.pauseButtonElt = document.getElementById("pause_button");
		this.playButtonElt = document.getElementById("play_button");
	}

	// Method running
	running() {

		// Pause button
		//...
		this.containerMainElt.onmouseover = this.PauseDisplay.bind(this);
		this.containerMainElt.onmouseout = this.PauseHidden.bind(this);

		this.containerButtonElt.onclick = this.pauseSlider.bind(this);

		// Right button
		//...
		this.rightButtonElt.onclick = this.rightButton.bind(this);

		// Left button
		//...
		this.leftButtonElt.onclick = this.leftButton.bind(this);

		// Keyboard
		//...
		this.containerMainElt.onkeydown = this.keyboardToutch.bind(this);

		// Mode auto
		this.automaticMode();
	} // End method running

	// Method PauseDisplay
	PauseDisplay() {
		this.containerButtonElt.style.display = "block";
	}

	// Method PauseHidden
	PauseHidden() {
		this.containerButtonElt.style.display = "none";
	}

	automaticMode() {
		let sliderContainerElt = this.sliderContainerElt;
		let maxLeft = this.maxLeft;
		let maxSlide = this.maxSlide;
		let maxRight = this.maxRight;
		let slideSize = this.slideSize;

		function auto() {
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
		} // End function auto

		this.nextSlide = setInterval(auto, 5000);
	} // End method automaticMode

	// Method pauseSlider
	pauseSlider() {

		if(this.pause) {
			this.pauseButtonElt.style.display = "block";
			this.playButtonElt.style.display = "none";
			this.automaticMode();
			this.pause = false;
		}
		else {
			this.pauseButtonElt.style.display = "none";
			this.playButtonElt.style.display = "block";
			clearInterval(this.nextSlide);
			this.pause = true;
		}
	}

	// Method rightButton
	rightButton() {
		if(this.sliderContainerElt.style.left) {
			var leftSlider = this.sliderContainerElt.style.left;
		}
		else {
			var leftSlider = getComputedStyle(this.sliderContainerElt).left;
		}

		var leftSliderInt = parseInt(leftSlider); // Convert the input strings into int

		if(leftSliderInt > this.maxRight) {
			leftSliderInt = leftSliderInt-this.slideSize;
			this.sliderContainerElt.style.left = leftSliderInt + "%";

			if(leftSliderInt == this.maxRight) {
				this.maxSlide = true;
			}
		}
		// Pause button 
		this.pause = true;
		this.pauseButtonElt.style.display = "none";
		this.playButtonElt.style.display = "block";

		// Stop automaticMode
		clearInterval(this.nextSlide);
	} // End rightButton

	// Method leftButton
		leftButton() {
			if(this.sliderContainerElt.style.left) {
				var leftSlider = this.sliderContainerElt.style.left;
			}
			else {
				var leftSlider = getComputedStyle(this.sliderContainerElt).left;
			}

			var leftSliderInt = parseInt(leftSlider); // Convert the input strings into int

			if(leftSliderInt < this.maxLeft) {
				leftSliderInt = leftSliderInt+this.slideSize;
				this.sliderContainerElt.style.left = leftSliderInt + "%";

				if(leftSliderInt === this.maxLeft) {
					this.maxSlide = false;
				}
			}
			// Pause button
			this.pause = true;
			this.pauseButtonElt.style.display = "none";
			this.playButtonElt.style.display = "block";

			// Stop automaticMode
			clearInterval(this.nextSlide);
		} // End leftButton

		// Method keyboardToutch
		keyboardToutch() {
			if(event.keyCode == 39) { // KeyCode: right spire
				if(this.sliderContainerElt.style.left) {
					var leftSlider = this.sliderContainerElt.style.left;
				}
				else {
					var leftSlider = getComputedStyle(this.sliderContainerElt).left;
				}

				var leftSliderInt = parseInt(leftSlider); // Convert the input strings into int

				if(leftSliderInt > this.maxRight) {
					leftSliderInt = leftSliderInt-this.slideSize;
					this.sliderContainerElt.style.left = leftSliderInt + "%";

					if(leftSliderInt == this.maxRight) {
						this.maxSlide = true;
					}
				}
				// Pause button
				this.pause = true;
				this.pauseButtonElt.style.display = "none";
				this.playButtonElt.style.display = "block";
				clearInterval(this.nextSlide);
			}

			else if(event.keyCode == 37) { // KeyCode: left spire
				
				if(this.sliderContainerElt.style.left) {
					var leftSlider = this.sliderContainerElt.style.left;
				}
				else {
					var leftSlider = getComputedStyle(this.sliderContainerElt).left;
				}

				var leftSliderInt = parseInt(leftSlider); // Convert the input strings into int

				if(leftSliderInt < this.maxLeft) {
					leftSliderInt = leftSliderInt+this.slideSize;
					this.sliderContainerElt.style.left = leftSliderInt + "%";

					if(leftSliderInt == this.maxLeft) {
						this.maxSlide = false;
					}
				}
				// Pause button
				this.pause = true;
				this.pauseButtonElt.style.display = "none";
				this.playButtonElt.style.display = "block";
				clearInterval(this.nextSlide);
			}
		} // End Method keyboardToutch

} // End class Slider
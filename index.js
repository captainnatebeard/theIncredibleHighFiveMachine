/**
	Nathan Johnson
	October 17, 2018
	This is the Javascript file for my high five machine.  It provides the behavior for the inner workings of the high five machine
*/
(function() {
	let timer=null;
	let timer2=null;
	"use strict";
  window.addEventListener("load", initialize);

/* initializes the js, sets up some listeners, and a timer for the header color
change code */
  function initialize() {
    let pictureUT = document.getElementById("uptop");
    pictureUT.addEventListener("click", changeImageUT);
		let pictureITM = document.getElementById("inTheMiddle");
    pictureITM.addEventListener("click", changeImageITM);
		let pictureDL = document.getElementById("downLow");
		pictureDL.addEventListener("mouseover", tooSlow);
		pictureDL.addEventListener("click", changeImageDL2);
		startAndStopFlashing()
		let button1 = document.getElementById("button1");
		button1.addEventListener("click", startAndStopFlashing);
		button2.addEventListener("click", blastOff);
  }

// changes the first image to a thumbs up picture
	function changeImageUT() {
			this.src = "images/thumbsup.png";
  }

// changes the second image to a different thumbs up picture
  function changeImageITM() {
		this.src = "images/thumbsup2.png";
  }

// starts a timer
	function tooSlow() {
		setTimeout(changeImageDL, 500);
  }

// changes the header color every 3 seconds from red to blue or visa versa
	function headerColor() {
		let header = document.getElementsByTagName("header")[0];
		if (header.id === "headerRed") {
			header.id = "headerBlue";
		} else {
			header.id = "headerRed";
		}
	}

// changes the third image to a smiley face "too slow" picture
	function changeImageDL() {
		newElement = document.createElement("img");
		newElement.id = "new";
		newElement.src = "images/tooSlow.png";
		let pictureDL = document.getElementById("downLow");
		pictureDL.parentNode.replaceChild(newElement, pictureDL);
	}

// changes the third image to a thumbs up picture
	function changeImageDL2() {
		newElement = document.createElement("img");
		newElement.id = "new";
		newElement.src = "images/thumbsup.png";
		let pictureDL = document.getElementById("downLow");
		pictureDL.parentNode.replaceChild(newElement, pictureDL);
	}

	function startAndStopFlashing() {
		//let size = getComputedStyle(this).fontSize;
		let size = getComputedStyle(document.getElementById("button1")).fontSize
		if (timer === null) {
			this.innerText = "Flashing annoying?";
			timer = setInterval(headerColor, 3000);
			document.getElementById("button1").style.fontSize = (parseInt(size) + 4) + "pt";
		} else {
			this.innerText = "Gimme back the Flash!";
			clearInterval(timer);
			timer = null;
			document.getElementById("button1").style.fontSize = "14pt";
		}
	}

	function blastOff() {
		let i = 10;
		timer2 = setInterval(function() {
			if (i === 0) {
				console.log("0");
				clearInterval(timer2)
				timer2 = null;
			} else {
				console.log(i);
				i--;
			}
		}, 1000);
	}
})();

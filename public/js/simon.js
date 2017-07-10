(function(){
	"use strict";

var colorBoxes = ["#red", "#blue", "#green", "#yellow"];
var usedColors = [];


function random(){
	var randomColor = Math.floor(Math.random() * colorBoxes.length);
	usedColors.push(colorBoxes[randomColor]);
	return usedColors;
};

function flashColors(){
	usedColors.forEach(function(element,index){
		setTimeout(function() {	
				$(element).animate({
					opacity: "1",	
				}, 800).animate({
					opacity: "0.5"
				}, 200);
			}, index * 1000);
	});
		console.log(usedColors);
}

$("#start").click(function () {
	random();
	flashColors();
});

/* 
1. Click start button
 -display current round 
 -generate the 1st random color box

function startGame(){
	var colorBoxes = [red, blue, green, yellow];
 	var randomColor = Math.random(colorBoxes.length);

function randomSequence(){
	return randomColor;
	}

 2. Dislay the 1st random color box in bright color
 and then opacity back to 0.5

 3. User clicks

 4. Check if user click = random color box that was
 generated

 5. After 1st round,
 cycle back through the function, show the 1st box
 and then generate a random 2nd color box



 */

























	
})();
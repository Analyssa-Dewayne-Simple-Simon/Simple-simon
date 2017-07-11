(function(){
	"use strict";

var colorBoxes = ["#red", "#blue", "#green", "#yellow"];
var usedColors = [];
var playerClickIndex = 0;
var level = 0;

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

$(".box").click(function(id) {
	$("#" + this.id).animate({
		opacity: "1",	
	}, 800).animate({
			opacity: "0.5"
	}, 200);
});


$("#start").click(function () {
	random();
	flashColors();
});

// Stores Colors that the Player Clicks
$(".box").click(function () {
	var playerClick = "#" + this.id;
	if (playerClick === usedColors[playerClickIndex]){
		playerClickIndex += 1;
		console.log(playerClick + " " + playerClickIndex);
		if(playerClickIndex === usedColors.length){
			playerClickIndex = 0;
			level++;
			displayLevel();
			setTimeout(function () {
				random();
				flashColors();
			}, 1000);
		}	
	} else {
		alert("Game Over!");
		clearGame();
	}
});


// Display current level
function displayLevel(){
	$('h2').text('Level: ' + level);
}

// Clear out Game and start New Game
function clearGame() {
	usedColors = [];
	playerClickIndex = 0;
	$('h2').text('Level: 0');
}
// --------------------------------------




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
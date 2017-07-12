(function(){
"use strict";
//  1. Click start button
//  -display current round 
//  -generate the 1st random color box

//  2. Dislay the 1st random color box in bright color
//  and then opacity back to 0.5

//  3. User clicks

//  4. Check if user click = random color box that was
//  generated

//  5. After 1st round,
//  cycle back through the function, show the 1st box
//  and then generate a random 2nd color box
// */


var colorBoxes = ["#red", "#blue", "#green", "#yellow"];
var usedColors = [];
// Stores the color array that has been chosen randomly
var playerColors = "";
var playerClickIndex = 0;
// Stores the index of when the player clicks
var level = 0;
// Stores what level of the game you are on


// Generates a Random Color from the Array of colorBoxes
function random(){
	var randomColor = Math.floor(Math.random() * colorBoxes.length);
	usedColors.push(colorBoxes[randomColor]);
	return usedColors;
};

/*The For Each loop goes through our array of colorBoxes and lights it up
and goes back to original opacity whenever the random color is generated */
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

/* Animates whenever the player clicks */
$(".box").click(function(id) {
	$("#" + this.id).animate({
		opacity: "1",	
	}, 500).animate({
			opacity: "0.5"
	}, 200);
});

/* When you click the start button, the random color generator and flashing begin*/
$("#start").click(function () {
	random();
	flashColors();
	$("#start").attr("disabled", true);
});

/* Stores Colors that the Player Clicks and compares against the usedColors index */
$(".box").click(function () {
	//click event when you click any of the 4 boxes
	var playerColors = "#" + this.id;
	if (playerColors === usedColors[playerClickIndex]){
	//if playerColor equals usedColor(playercolor) then add 1 to the index. 
	//it is counting how many times the user is clicking
		playerClickIndex += 1;
		console.log(playerColors + " " + playerClickIndex);
		if(playerClickIndex === usedColors.length){
			//if indexes match
			playerClickIndex = 0;
			//Move to to next level
			level++;
			//Add 1 to current level
			displayLevel();
			setTimeout(function () {
				random();
				flashColors();
			}, 1500);
		}	
	} else {
		clearGame();
		showRyan();
	}
});

// Display current level
function displayLevel(){
	$('#currentLevel').text('Level: ' + level);
}

// Clear out Game and start New Game
function clearGame() {
	level = 0;
	usedColors = [];
	playerColors = "";
	playerClickIndex = 0;
	$('#currentLevel').text('Level: 0');
	// $('#youlost').show(3000);
	// $('#ryanimg').show(3000);
	// $('#youlost').hide(4000);
	// $('#ryanimg').hide(4000);
}
// Reset button
$("#reset").click(function () {
	showRyan();
	clearGame();
	$("#start").attr("disabled", false);
});

function showRyan() {
	$('#youlost').show(3000);
	$('#ryanimg').show(3000);
	$('#youlost').hide(4000);
	$('#ryanimg').hide(4000);
}


})();
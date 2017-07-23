// Get the questions and the answers along with wrong answers
//press the start button to start the game

var question1 ={
	quest: "Which baseball team set an all-time record when they lost 120 games in 1962?",
	ans: "New York Mets",
	guess: ["Chicago Cubs", "New York Yankees", "New York Mets", "Detroit Tigers"]
};
var question2 ={
	quest: "Known as \"Mr. Hockey\", what famous hockey player died in June of 2016 at the age of 88?",
	ans: "Gordie Howe",
	guess: ["Gordie Howe", "Bobby Hull", "Bobby Orr", "Wayne Gretzky "]
};
var question3 ={
	quest: "What NFL team won Super Bowl 50 on February 7, 2016? ",
	ans: "Denver Broncos",
	guess: ["Carolina Panthers", "New York Giants", "Pittsburg Steelers", "Denver Broncos"]
};
var question4 ={
	quest: "Which NHL team won the 2016 Stanley Cup finals?",
	ans: "Pittsburg Penguins",
	guess: ["San Jose Sharks", "Nashville Predators", "New York Rangers", "Pittsburg Pengiuns"]
};
var question5 ={
	quest: "Which of these players did NOT win the Heisman Trophy for Florida State?",
	ans: "Dion Sanders",
	guess: ["Charlie Ward", "Jameis Winston", "Deion Sanders", "Chris Weinke"]
};

var setTimerSeconds = 30;

//When the start button is pushed create the divs and start the game.  Set the timer and start countdown.  Display the questions and choices
$("#btnId").click( function(){
	alert( "Handler for .click() called." );
	$("#empty-div").text("Time Remaining: ");
	var timerSpan = $("<span>");
	timerSpan.html("<h4>30 Seconds</h4>");
	$("#empty-div").append(timerSpan);
	/*
	for( var i = 0; i < 4; i++){
		$( "#newDiv" ).add( "h4" ).addClass( "guesses" );
	var gemValue = Math.floor((Math.random() * 12) + 1);
	crystalAmounts.push(gemValue);
	console.log(crystalAmounts[i]);
	var imgButton = $("<button>");
imgButton.addClass(crystalType[i]);
imgButton.addClass("crystal-image");
imgButton.attr("value-crystal", crystalAmounts[i]);
$("#addButtons").append(imgButton);
}
	*/
});
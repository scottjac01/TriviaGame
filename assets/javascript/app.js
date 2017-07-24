// Get the questions and the answers along with wrong answers
//press the start button to start the game

//Create questions

var triviaQuestions ={
	quest: ["\"Mr. Hockey\", what famous hockey player died in June of 2016 at the age of 88?",
					"What NFL team won Super Bowl 50 on February 7, 2016? ",
					"Which NHL team won the 2016 Stanley Cup finals?",
					"Which of these players did NOT win the Heisman Trophy for Florida State?"],
	anws: ["Gordie Howe", "Denver Broncos", "Pittsburg Penguins",
				 "Deion Sanders"]
};

var guess1 =  ["Chicago Cubs", "New York Yankees", "New York Mets", "Detroit Tigers"];
var	guess2 =  ["Gordie Howe", "Bobby Hull", "Bobby Orr", "Wayne Gretzky "];
var	guess3 =  ["Carolina Panthers", "New York Giants", "Pittsburg Steelers", "Denver Broncos"];
var	guess4 = ["San Jose Sharks", "Nashville Predators", "New York Rangers", "Pittsburg Pengiuns"];
var	guess5 = ["Charlie Ward", "Jameis Winston", "Deion Sanders", "Chris Weinke"];


var setTimerSeconds = 30;
var isBtnEnabled = true;

//When the start button is pushed create the divs and start the game.  Set the timer and start countdown.  Display the questions and choices
$("#btnId").click( function(){
	for(var i = 0; i < triviaQuestions.quest.length; i++){
	var strQuestion = $("<div>");
	var strChoice = $('<input type="radio" name="optradio" />');
	strQuestion.text(triviaQuestions.quest[i]);
	console.log(triviaQuestions.quest[i]);
	console.log(guess1[i]);
	$("quest").append(strQuestion);
	$("radio-inline").append(strChoice);


	}

});
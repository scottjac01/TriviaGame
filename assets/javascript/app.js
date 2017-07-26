// Get the questions and the answers along with wrong answers
//press the start button to start the game

//Create questions

var triviaQuestions ={
	quest: ["What famous hockey player died in June of 2016 at the age of 88?",
					"What NFL team won Super Bowl 50 on February 7, 2016? ",
					"Which NHL team won the 2016 Stanley Cup finals?",
					"Which of these players did NOT win the Heisman Trophy for Florida State?"],
	anws: ["Gordie Howe", "Denver Broncos", "Pittsburg Penguins",
				 "Deion Sanders"]
};

var	guess1 =  ["Gordie Howe", "Bobby Hull", "Bobby Orr", "Wayne Gretzky "];
var	guess2 =  ["Carolina Panthers", "New York Giants", "Pittsburg Steelers", "Denver Broncos"];
var	guess3 = ["San Jose Sharks", "Nashville Predators", "New York Rangers", "Pittsburg Pengiuns"];
var	guess4 = ["Charlie Ward", "Jameis Winston", "Deion Sanders", "Chris Weinke"];


var setTimerSeconds = 90;
var isBtnEnabled = true;
var intervalId;

//Create the timer function to countdown the time
	function run() {
	  intervalId = setInterval(decrease, 1000);
	}

	//  The decrease time function.
	function decrease() {
	  setTimerSeconds--;
	 $(".timer").html("<h2>" + setTimerSeconds + "</h2>");
	  if (setTimerSeconds === 0) {
	    stop();
	  }
	}

//  The stop function
function stop() {
  clearInterval(intervalId);
  setTimerSeconds =90;
}

//When the start button is pushed create the divs and start the game.  Set the timer and start countdown.  Display the questions and choices
$("#btnId").click( function(){
	var str1 = $("<p>");
	str1.html("<h2>Time Remaining: </h2>");
	$(".timeRemaining").prepend(str1);
	var strQuestion = $("<h2>");
	strQuestion.addClass("question1");
	strQuestion.text(triviaQuestions.quest[0]);
	$(".question").append(strQuestion);
	
	for(var i = 0; i < guess1.length; i++){
	var strChoice = $("<h3>");
	strChoice.addClass("question1");
	strChoice.text(guess1[i]);
	$(".question").append(strChoice);
	console.log(guess1[i]);
	}

// execute the run function after the questions load
run();
});


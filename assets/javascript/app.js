$(document).ready(function(){

// Timer function. This counts down from 5, then stops and prints 'Time is up'

var number = 5;
var counter;

var timer = function(){
    counter = setInterval(decrement, 1000);
};

var stop = function(){
    clearInterval(counter);
};

var decrement = function(){
	// Just logging the results to make sure it works
    console.log(number--);
    $('#countdown').html('<h2>Time remaining: ' + number + ' Seconds' + '</h2>');
    if (number == 0){
        stop();
        console.log('Time is up!');
    }
};
		

// Object for storing my questions

var questionsObj = {
	question1: {
		tagline: "Man is the warmest place to hide",
		answer1: "Alien",
		answerCorrect: "The Thing",
		answer3: "Shaun of the Dead"

	},

	question2: {
		tagline: "Earth. It was fun while it lasted",
		answer1: "Mars Attacks!",
		answer2: "Independence Day",
		answerCorrect: "Armageddon"

	},

	question3: {
		tagline: "His story will touch you, even if he can't",
		answerCorrect: "Edward Scissorhands",
		answer2: "Powder",
		answer3: "The Boy in the Plastic Bubble"

	},

	question4: {
		tagline: "One man's struggle to take it easy",
		answerCorrect: "Ferris Bueller's Day Off",
		answer2: "The Big Lebowski",
		answer3: "Slackers"

	},

	question5: {
		tagline: "The last man on Earth is not alone",
		answerCorrect: "I Am Legend",
		answer2: "The Road",
		answer3: "The Book of Eli"

	},

	question6: {
		tagline: "You won't believe your eye",
		answer1: "Superman",
		answerCorrect: "Monsters, Inc.",
		answer3: "The Tree of Life"

	},

	question7: {
		tagline: "Are you watching closely?",
		answer1: "Now You See Me 2",
		answerCorrect: "The Prestige",
		answer3: "Oz the Great and Powerful"

	},
 }

// Start button function

startHere();

function startHere(){

$("#startButton")
	.hover(function(){
		$(this).css("background-color", "blue");
	}, function(){
		$(this).css("background-color", "red");
	});

$("#startButton").click(timer);
	$(this).click(function(){
		$("#startButton").remove();
			$("#mainText").html(
					"<p class='question'>" + questionsObj.question1.tagline + "</p>" + 
					"<input class = 'answer' type='radio' name='tagline'>" + "  " + questionsObj.question1.answer1 +  "  " +
					"<input class = 'answer' type='radio' name='tagline'>" + "  " +  questionsObj.question1.answerCorrect +  "  " +
					"<input class = 'answer' type='radio' name='tagline'>" + "  " +  questionsObj.question1.answer3 +  "  " +

					"<br>" +

					"<p class='question'>" + questionsObj.question2.tagline + "</p>" + 
					"<input class = 'answer' type='radio' name='tagline'>" +  "  " + questionsObj.question2.answer1 + "  " +
					"<input class = 'answer' type='radio' name='tagline'>" +  "  " + questionsObj.question2.answer2 +  "  " +
					"<input class = 'answer' type='radio' name='tagline'>" +  "  " + questionsObj.question2.answerCorrect +  "  " +					

					"<br>" +

					"<p class='question'>" + questionsObj.question3.tagline + "</p>" + 
					"<input class = 'answer' type='radio' name='tagline'>" +  "  " + questionsObj.question3.answerCorrect +  "  " +
					"<input class = 'answer' type='radio' name='tagline'>" +  "  " + questionsObj.question3.answer2 +  "  " +
					"<input class = 'answer' type='radio' name='tagline'>" +  "  " + questionsObj.question3.answer3 +  "  " +

					"<br>" +

					"<p class='question'>" + questionsObj.question4.tagline + "</p>" + 
					"<input class = 'answer' type='radio' name='tagline'>" +  "  " + questionsObj.question4.answerCorrect +  "  " +
					"<input class = 'answer' type='radio' name='tagline'>" + questionsObj.question4.answer2 +  "  " +
					"<input class = 'answer' type='radio' name='tagline'>" + questionsObj.question4.answer3 +  "  " +

					"<br>" +

					"<p class='question'>" + questionsObj.question5.tagline + "</p>" + 
					"<input class = 'answer' type='radio' name='tagline'>" +  "  " + questionsObj.question5.answerCorrect +  "  " +
					"<input class = 'answer' type='radio' name='tagline'>" +  "  " + questionsObj.question5.answer2 +  "  " +
					"<input class = 'answer' type='radio' name='tagline'>" +  "  " + questionsObj.question5.answer3 +  "  " +

					"<br>" +

					"<p class='question'>" + questionsObj.question6.tagline + "</p>" + 
					"<input class = 'answer' type='radio' name='tagline'>" +  "  " + questionsObj.question6.answer1 +  "  " +
					"<input class = 'answer' type='radio' name='tagline'>" +  "  " + questionsObj.question6.answerCorrect +  "  " +
					"<input class = 'answer' type='radio' name='tagline'>" +  "  " + questionsObj.question6.answer3 +  "  " +

					"<br>" +

					"<p class='question'>" + questionsObj.question7.tagline + "</p>" + 
					"<input class = 'answer' type='radio' name='tagline'>" +  "  " + questionsObj.question7.answer1 +  "  " +
					"<input class = 'answer' type='radio' name='tagline'>" +  "  " + questionsObj.question7.answerCorrect +  "  " +
					"<input class = 'answer' type='radio' name='tagline'>" +  "  " + questionsObj.question7.answer3
				)
				
			})
		}


var results = 0;
var userSelect;
if (userSelect == 1) {

}

});





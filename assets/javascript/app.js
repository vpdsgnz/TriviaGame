$(document).ready(function(){
	
var myQuestions = [
	{
		question: "1. How did Daenerys Targaryen eventually hatch her dragon eggs?", 
		choices: ["In a lightning storm", "In a funeral pyre", "In a fireplace", "In a frozen cave"],
		answer: 1,
	},
	{
		question: "2. Which Stark family direwolf was killed in retaliation for an attack on Prince Joffrey?", 
		choices: ["Ghost", "Lady", "Nymeria", "Summer"],
		answer: 1,
	},
	{
		question: "3. The phrase 'Valar Morghulis' or 'all men must die' is usually responded with:", 
		choices: ["Valar Dohaeris or 'all men must serve'", "Valar Rohnas or 'all men must live'", "Valar GoGo or 'all men must dance'", "Valar Azor or 'all men must fight'"],
		answer: 0,
	},
	{
		question: "4. 'It's nothing' were the last words of this infamous character:", 
		choices: ["Renly Baratheon", "Tywin Lannister", "Robb Stark", "King Joffrey"],
		answer: 3,
	},
	{
		question: "5. What is the only thing that can put out volatile Wildfire?", 
		choices: ["Sand", "Water", "Dragon's blood", "Sunlight"],
		answer: 0,
	},
	{
		question: "6. Besides dragonglass, what is the only other substance capable of defeating White Walkers?", 
		choices: ["Weirwood", "Wildfire", "Valyrian Steel", "Snowballs"],
		answer: 2,
	},
	{
		question: "7. How many times has Beric Dondarrion been brought back to life?", 
		choices: ["Three times", "Five times", "Six times", "Seven times"],
		answer: 2,
	},
	{
		question: "8. Who shoots the flaming arrow that subsequently destroy's Stannis' fleet in Blackwater Bay?", 
		choices: ["Tyrion Lannister", "King Joffrey", "Jaime Lannister", "Bronn"],
		answer: 3,
	},
	{
		question: "9. Arya's punishment for stealing from the Many-Face God is:", 
		choices: ["Death", "Memory Loss", "Blindness", "Uncontrollable laughter"],
		answer: 2,
	},
	{
		question: "10. What was the name of Ned Stark's greatsword?", 
		choices: ["Ice", "Oathkeeper", "Widow's Wail", "Northguard"],
		answer: 0,
	},
];

var correctScore = 0;
var incorrectScore = 0;
var noAnswer = 0;
var timer = 20;
var intervalId;
var running = false;
runTimer();
buidlQuiz();

function runTimer(){
	if (!running) {
	intervalId = setInterval(countDown, 1000); 
	running = true;
	}
}

function countDown () {
	timer --;
	$("#time-left").html("<h3>Time remaining: " + timer + "</h3>");

	if (timer === 0) {
		stop();
		$("#time-left").html("<h2>Time's Up!</h2>");
		results();
	}
}

function stop() {
	running = false;
	clearInterval(intervalId);
	check();
}

function buidlQuiz() {

	for (var i = 0; i < myQuestions.length; i++) {
		$("#quiz").append('<div class="question">' + myQuestions[i].question + '</div>');
		$("#quiz").append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group' + i +'" id="radio' + i +'" value="0"><label class="form-check-label" for="radio' + i +'">'+ myQuestions[i].choices[0] +'</label></div>');
		$("#quiz").append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group' + i +'" id="radio' + i +'" value="1"><label class="form-check-label" for="radio' + i +'">'+ myQuestions[i].choices[1] +'</label></div>');
		$("#quiz").append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group' + i +'" id="radio' + i +'" value="2"><label class="form-check-label" for="radio' + i +'">'+ myQuestions[i].choices[2] +'</label></div>');
		$("#quiz").append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group' + i +'" id="radio' + i +'" value="3"><label class="form-check-label" for="radio' + i +'">'+ myQuestions[i].choices[3] +'</label></div>');
	}

	$("#quiz").append('<button id="submit" class="btn btn-primary" type="submit">Submit</button>')
	$("#submit").click(function(){
	  stop();
	  results();
    });
} 


function check() {
	var pick;
	var correct;
	
	for (var i = 0; i < myQuestions.length; i++) {
		pick = parseInt($('input[id=radio'+i+']:checked', true).val());
		correct = myQuestions[i].answer;

		if (pick === correct) {
			correctScore++;
		}
		else if (pick === "") {
			noAnswer++;
		}
		else if (pick !== correct) {
			incorrectScore++;
		}
	}
	console.log("Correct: "+ correctScore);
	console.log("Incorrect: " + incorrectScore);
	console.log("Missed: " + noAnswer);
}

function results() {
	$("#quiz").empty();
	$("#results").append("<h3>Correct: " + correctScore + "</h3>");
	$("#results").append("<h3>Incorrect: " + incorrectScore + "</h3>");
	$("#results").append("<h3>Unanswered: " + noAnswer + "</h3>");
}

});
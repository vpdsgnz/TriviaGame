$(document).ready(function(){
    // $("#hide").click(function(){
    //   $("p").hide();
    // });
    // $("#show").click(function(){
    //   $("p").show();
	// });
	
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
		choices: ["Valar Dohaeris or 'all men must serve'", "Valar Rohnas or 'all men must live'", "Valar GoGo or 'all men must dance'"],
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

var correct = 0;
var incorrect = 0;
var noAnswer = 0;
var timer = 10;
var intervalId;
var running = false;
runTimer();
// displayQuestion();
buidlQuiz();

function runTimer(){
	if (!running) {
	intervalId = setInterval(countDown, 1000); 
	running = true;
	}
}

function countDown () {
	$("#time-left").html("<h3>Time remaining: " + timer + "</h3>");
	timer --;

	if (timer === -1) {
		stop();
		noAnswer++;
		$("#time-left").html("<h2>Time's Up!</h2>");
		$("#no-answer").html("<h3>No answer: " + noAnswer + "</h3>");
	}	
}

function stop() {
	running = false;
	clearInterval(intervalId);
}

function buidlQuiz() {

	myQuestions.forEach(function(q){

		$("#quiz").append("<h2>" + q.question + "</h2></br>");
		// $("#quiz").append('<input type="radio" name="question" value="1">'+q.choices[options]);
		// console.log(q.choices);
		// console.log(q.answer);
	})
}

});
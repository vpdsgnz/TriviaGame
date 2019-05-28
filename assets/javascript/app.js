$(document).ready(function(){
    // $("#hide").click(function(){
    //   $("p").hide();
    // });
    // $("#show").click(function(){
    //   $("p").show();
    // });

var correct = 0;
var incorrect = 0;
var noAnswer = 0;
var timer = 10;
var intervalId;
var running = false;
runTimer();

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
    $("#time-left").html("<h2>Time's Up!</h2>");
	}	
}

function stop() {
	running = false;
	clearInterval(intervalId);
}

});
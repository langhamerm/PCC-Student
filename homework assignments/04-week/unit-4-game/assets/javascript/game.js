// Global Variables
// ------------------------------------
var crystal= {
    pink:
    {
        name: "Pink",
        value: 0
    },
    blue:
    {
        name: "Blue",
        value: 0
    },
    green:
    {
        name: "Green",
        value: 0
    }, 
    purple:
    {
        name: "Purple",
        value: 0
    }
};

// Score - current and target 
var currentScore = 0;
var targetScore = 0;

// Wins and Losses 
var winCount = 0;
var lossCount = 0;




// Function Junction
// ------------------------------------
var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;

}

var startGame = function() {

    // Reset Current Score 
    currentScore = 0;

    // Set new Target Score 

    targetScore = getRandom(19, 120);

    // Give each Crystal a value 

    crystal.pink.value = getRandom(1, 12);
    crystal.blue.value = getRandom(1, 12);
    crystal.green.value = getRandom(1, 12);
    crystal.purple.value = getRandom(1, 12);


    // HTML Changes
    $("#yourScore").html(currentScore);
    $("#targetScore").html(targetScore);

    console.log("Target Score" + targetScore);
    console.log("Pink:" + crystal.pink.value + " | Blue: " + 
    crystal.blue.value + " | Green: " + crystal.green.value +
     " | Purple:" + crystal.purple.value)
}
// click response to crystal 
var addValues = function(crystal) {
    currentScore = currentScore + crystal.value;

    // Change the HTML to reflect change of score 
$("#yourScore").html(currentScore);

// call CheckWin 
checkWin();
    console.log("your score:" + currentScore);
}

    // Check Win Lose 

    var checkWin = function() {
// check if currentScore is larger than Target 
if (currentScore>targetScore) {

    alert("have you heard about the lonesome loser");
lossCount++;

$("#lossCount").html(lossCount);
startGame();
}
else if (currentScore == targetScore) {
    alert("We have a Winner");

winCount++;

$("#winCount").html(winCount);

startGame();


}
    }






// Main 
// ------------------------------------

startGame();
$("#pink").click(function() {
    addValues(crystal.pink);
});

$("#blue").click(function() {
    addValues(crystal.blue);
});
$("#green").click(function() {
    addValues(crystal.green);
});
$("#purple").click(function() {
    addValues(crystal.purple);
});



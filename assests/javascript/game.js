var alphabet = ["a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "x",
    "y",
    "z"
];
//Varible needed to code
var win = 0;
var lose = 0;
var left = 9;

var currentGuess = [];
var compLetter;

//rand letter gen.
var randLetter = function() {
    compLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
};
//Current guesses
var soFar = function() {
    document.getElementById("guesses").innerHTML = "Guesses so far: " + currentGuess.join(",");
};
//Number of guesses left
var guessesLeft = function() {
    document.getElementById("left").innerHTML = "Guesses Left: " + left;
};
//clear the text
function emptyText() {
    currentGuess = [];
}
//Make a new game
var newGame = function() {
        currentGuess;
        left = 9;
        randLetter();
        guessesLeft();
        emptyText();

    }
    //user input code.
document.onkeyup = function(event) {
    var userGuess = event.key;
    //add guess to array
    currentGuess.push(userGuess);
    soFar();
    guessesLeft();
    //if user has any guesses
    if (left > 0) {
        //if user is right
        if (userGuess == compLetter) {
            wins++;
            document.getElementById("wins").innerHTML = "Wins:" + win;
            newGame();
            //if user is wrong
        } else {
            left--;
        }
        //out of guesses
    } else if (left == 0) {
        losses++;
        document.getElementById("losses").innerHTML = "Lose:" + lose;
        newGame();
    }

};
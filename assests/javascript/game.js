    //Var needed for this code
    var win = 0;
    var lose = 0;
    var i = 10;
    var result = random_character();
    //Randon letter genda
    var chars = "abcdefghijklmnopqurstuvwxyz";

    function random_character() {
        return chars.substr(Math.floor(Math.random() * 26), 1);

    }
    //reset the rand letter
    function reset() {
        random_character();
        return result;
    }
    //print on html page and log it
    var guessE1 = document.getElementById("game")
    guessE1.textContent = result;
    console.log(result);

    //user input 10 letters
    document.onkeyup = function(event) {
        var userChoice = event.key
            //if guess is correct
        if (userChoice === result) {
            alert("Correct")
            console.log(result);
            win++;
            reset();
        } else {
            //if guess is wrong and sub one guess
            alert("Incorrect")
            i--;
        }
        //if user is out of guesses
        if (i === 0) {
            alert("Game over")
            lose++;
        }
    }

    //check if guess choice is correct
    //add point to a Win if correct and a Loses if incorrect
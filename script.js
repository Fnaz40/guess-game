let computerGuess;
let userGuessLog = [];
let attempts = 0;
let maxGuesses = 10;


// Function for game end
function gameEnd() {
    document.getElementById('newGameButton').style.display = 'inline';
    document.getElementById('easyBtn').style.display = 'none';
    document.getElementById('hardBtn').style.display = 'none';
    // jb user ki attempts finish hojayein gi to wo dobara likh nh skta input field mein sirf read kryga or then new game strt kryga
    document.getElementById('inputBox').setAttribute('readonly', 'readonly');
}




// Funtion for easy mode
// easy activate kryga user or hard display nh hoga
function easyMode() {
    maxGuesses = 10;
    document.getElementById('easyBtn').className = "activeButton";
    document.getElementById('hardBtn').className = "";
}



// Funtion for hard mode
// hardmood activate hoga or easy display nh hoga
function hardMode() {
    maxGuesses = 5;
    document.getElementById('hardBtn').className = "activeButton";
    document.getElementById('easyBtn').className = "";
}


// Funtion for New Game 
// new game strt krny k lye newgamebutton pr click krygy page reload hoga
function newGame() {
    window.location.reload();
}



// Funtion for Number Generate
// computer display nh hoga or guess kryga num or new gamebutton display nh hoga loss hony pe displY hoga
function randomNumber() {
    computerGuess = Math.floor((Math.random() * 100) + 1);
    document.getElementById('newGameButton').style.display = 'none';
}



// Funtion for User Guess with conditions
// compare userguess or computer k guess ko
function compareGuess() {
    // userguess dalyga num input ma
    let userGuess = " " + document.getElementById("inputBox").value;

    userGuessLog.push(userGuess);
    document.getElementById('guessLog').innerHTML = userGuessLog;

    attempts++;
    document.getElementById('attempts').innerHTML = attempts;


    // Conditions
    if (userGuessLog.length < maxGuesses) {
        // agr userguess computerguess sy bara ho to ye ho
        if (userGuess > computerGuess) {
            document.getElementById('textOutput').innerHTML = 'Your guess is too high';
            document.getElementById('inputBox').value = "";
        }
        // wrna agr cota ho to too low dekhay
        else if (userGuess < computerGuess) {
            document.getElementById('textOutput').innerHTML = 'Your guess is too low';
            document.getElementById('inputBox').value = "";
        }
        // wrna correct ay or collor chnge ho body ka
        else {
            document.getElementById('textOutput').innerHTML = 'Correct! you got it in ' + attempts + "attempts";
            document.getElementById('container').style.backgroundColor = 'green';
            gameEnd();
        }
    } else {
        // agr attempt na kr pay to you loss ay or sth ma computer ka guess num ay or body ka color chnge ho
        if (userGuess > computerGuess) {
            document.getElementById('textOutput').innerHTML = 'You Lose ' + '<br> the number was ' + computerGuess;
            document.getElementById('container').style.backgroundColor = 'red';
            gameEnd();
        }
        else if (userGuess < computerGuess) {
            document.getElementById('textOutput').innerHTML = 'You Lose ' + '<br> the number was ' + computerGuess;
            document.getElementById('container').style.backgroundColor = 'red';
            gameEnd();
        }
        // wrna attempt krny pr correct ay...
        else {
            document.getElementById('textOutput').innerHTML = 'Correct! you got it in ' + attempts + "attempts";
            gameEnd();
        }
    }

}
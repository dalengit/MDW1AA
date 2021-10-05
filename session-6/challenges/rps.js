// Input validation 
function start () {
    let userInput = document.getElementById('user-input').value;

    if (
        (userInput != "rock" && userInput != "paper" && userInput != "scissors")
    ) {
        alert("Please enter a valid input")
    } else {
        play();
    }
};

// Start Game
function play () {
    // Selectors
    let winner = document.getElementById('winner');
    let userInput = document.getElementById('user-input').value;
    let userResult = document.getElementById('player-choice');
    let computerResult = document.getElementById('computer-choice');

/*  
 - Three images on the screen 
 - Player chooses image 
 - Image triggers play function (.addEventListener('click'))
 - 
*/
    // Computer's choice
    let rpsOptions = ["rock", "paper", "scissors"];
    let randomRock = getRandomInt(3);
    let computerChoice = rpsOptions[randomRock];

    // Write Player choices to screen
    computerResult.innerHTML = computerChoice;
    userResult.innerHTML = userInput;

    // Game Logic & Results 
    if (computerChoice === userInput) {
        winner.innerHTML = "Draw!";
    } else if (
        (userInput === "Rock" && compChoice === "Scissors") ||
        (userInput === "Paper" && compChoice === "Rock") ||
        (userInput === "Scissors" && compChoice === "Paper")
    ) {
        winner.innerHTML = "User Wins!";
    } else {
        winner.innerHTML = "Computer Wins!"
    };
};

// Random Int Function
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};

// Play Again function
function playAgain () {
    location.reload();
    return false;
}

// Display image function
function displayImage () {
    // Logic to display image 
}

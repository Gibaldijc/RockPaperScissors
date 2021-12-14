
//Function to play 5 rounds game and reports winner or looser
let playerScore = 0;
let computerScore = 0;
let roundCount = 0;


game();

function game() {
	while (playerScore != 5 && computerScore != 5) {
	playRound();
	}
}


//Function  who choose item for computer
function computerPlay() {
	let random = Math.floor(Math.random()*3)+1;

	if (random === 1) {
		computerSelection = 'rock';
	} else if (random === 2) {
		computerSelection = 'paper';
	} else {
		computerSelection = 'scissors';
	}
	return computerSelection;
}

// Function who play a round of RPS
function playRound(playerSelection, computerSelection) {
	computerSelection = computerPlay(); //à enlever après 
	playerSelection = prompt("Choose between 'rock', 'paper' or 'scissors");
	playerSelection = playerSelection.toLowerCase();
	console.log(computerSelection);
	

	if (computerSelection === playerSelection) {
		console.log("It's a tie !");
	} else  {
		switch(computerSelection) {
			case "rock":
				if (playerSelection === "paper") {
					console.log("You win ! Paper beats Rock !");
					playerScore++;
				} else {
					console.log("You loose ! Rock beats Scissors !");
					computerScore++;
				}
				break;
			case "paper":
				if (playerSelection === "rock") {
					console.log("You loose ! Paper beats Rock !");
					computerScore++;
				} else {
					console.log("You win ! Scissors beats Paper !");
					playerScore++
				}
				break;
			case "scissors":
				if (playerSelection === "rock") {
					console.log("You win ! Rock beats Scissors !");
					playerScore++
				} else {
					console.log("You loose ! Scissors beats Paper !");
					computerScore++;
				}
		}

		if (playerScore === 5) {
			alert("Congratulation ! You won");
		} else if (computerScore === 5) {
			alert("You loose .... wanna try again ?");
		}
		console.log(computerScore, playerScore);
	}
}





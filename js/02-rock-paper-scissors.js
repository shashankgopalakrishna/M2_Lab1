function main() {
    var restartGame;
    do {
        while (1) {
            var userChoice = parseInt(window.prompt("Enter your Choice: \n1: Rock\n2:Paper\n3:Scissors"));
            if (userChoice === 1) {
                userChoice = "rock";
                break;
            }
            else if (userChoice === 2) {
                userChoice = "paper";
                break;
            }
            else if (userChoice === 3) {
                userChoice = "scissors";
                break;
            }
            else {
                window.alert("Please enter the valid choice available!");
                continue;
            }
        }

        var computerChoice = Math.round(Math.random() * 2);

        if (computerChoice === 0) {
            computerChoice = "rock";
        }
        else if (computerChoice === 1) {
            computerChoice = "paper";
        }
        else if (computerChoice === 2) {
            computerChoice = "scissors";
        }

        game(userChoice, computerChoice);
        restartGame = window.prompt("Want to Play Again? y/n");

    } while (restartGame != "n");
}

function game(user, computer) {
    if (computer === user) {
        alert("It is a Tie !")
    } else if ((user === "rock" && computer === "scissors") ||
        (user === "scissors" && computer === "paper") ||
        (user === "paper" && computer === "rock")) {
        alert("User Wins!");
    } else if ((computer === "rock" && user === "scissors") ||
        (computer === "scissors" && user === "paper") ||
        (computer === "paper" && user === "rock")) {
        alert("Computer Wins!");
    }
}

main();

gameBoard = ['','','','','','','','',''];
boxes = [];

for (i = 1; i <= 9; i++) {
    boxes.push(document.querySelector(`[id = "box${i}"]`));
}

function updateBoard() {
    for (i = 0; i < 9; i++) {
        if (boxes[i].firstElementChild.textContent == 'X' || boxes[i].firstElementChild.textContent == 'O') {
            gameBoard[i] = boxes[i].firstElementChild.textContent; 
        }
    }
}

function checkWinner() {
    if (gameBoard[0] == gameBoard[1] && gameBoard[0] == gameBoard[2]) {
        if (gameBoard[0] == "X") {
            console.log("CHECKWINNER TRIGGERED")
            headingText.textContent = "Player 1 Wins!";
            // ^ Text not currently showing because there's no code to exit the chooseMove(function), so the text gets overridden. 
        } else if (gameBoard[0] == "O") {
            headingText.textContent = "Player 2 Wins!";
        }
    } else if (gameBoard[3] == gameBoard[4] && gameBoard[3] == gameBoard[5]) {
        if (gameBoard[3] == "X") {
            headingText.textContent = "Player 1 Wins!";
        } else if (gameBoard[3] == "O") {
            headingText.textContent = "Player 2 Wins!";
        }
    } else if (gameBoard[6] == gameBoard[7] && gameBoard[6] == gameBoard[8]) {
        if (gameBoard[6] == "X") {
            headingText.textContent = "Player 1 Wins!";
        } else if (gameBoard[6] == "O") {
            headingText.textContent = "Player 2 Wins!";
        }
    } else if (gameBoard[0] == gameBoard[3] && gameBoard[0] == gameBoard[6]) {
        if (gameBoard[0] == "X") {
            headingText.textContent = "Player 1 Wins!";
        } else if (gameBoard[0] == "O") {
            headingText.textContent = "Player 2 Wins!";
        }
    } else if (gameBoard[1] == gameBoard[4] && gameBoard[1] == gameBoard[7]) {
        if (gameBoard[1] == "X") {
            headingText.textContent = "Player 1 Wins!";
        } else if (gameBoard[1] == "O") {
            headingText.textContent = "Player 2 Wins!";
        }
    } else if (gameBoard[2] == gameBoard[5] && gameBoard[2] == gameBoard[8]) {
        if (gameBoard[2] == "X") {
            headingText.textContent = "Player 1 Wins!";
        } else if (gameBoard[2] == "O") {
            headingText.textContent = "Player 2 Wins!";
        }
    } else if (gameBoard[0] == gameBoard[4] && gameBoard[0] == gameBoard[8]) {
        if (gameBoard[0] == "X") {
            headingText.textContent = "Player 1 Wins!";
        } else if (gameBoard[0] == "O") {
            headingText.textContent = "Player 2 Wins!";
        }
    } else if (gameBoard[6] == gameBoard[7] && gameBoard[6] == gameBoard[8]) {
        if (gameBoard[6] == "X") {
            headingText.textContent = "Player 1 Wins!";
        } else if (gameBoard[6] == "O") {
            headingText.textContent = "Player 2 Wins!";
        }
    } else if (gameBoard[6] == gameBoard[7] && gameBoard[6] == gameBoard[8]) {
        if (gameBoard[6] == "X") {
            headingText.textContent = "Player 1 Wins!";
        } else if (gameBoard[6] == "O") {
            headingText.textContent = "Player 2 Wins!";
        }
    } else if (gameBoard[2] == gameBoard[4] && gameBoard[2] == gameBoard[6]) {
        if (gameBoard[2] == "X") {
            headingText.textContent = "Player 1 Wins!";
        } else if (gameBoard[2] == "O") {
            headingText.textContent = "Player 2 Wins!";
        }
    } 
}


// Event listener and function for choosing move
function chooseMove() {
    let playerOne = 1;
    let playerTwo = 0; 
    let allButtons = document.querySelectorAll('.boxgrid');
    allButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (playerOne === 1) {
                button.firstElementChild.textContent = 'X';
                updateBoard();
                checkWinner();
                if (!(headingText.textContent == "Player 2 Wins!" || headingText.textContent == "Player 1 Wins!")) {
                    headingText.textContent = "Player 2's Turn";
                    playerOne = 0;
                    playerTwo = 1;
                }
            } else if (playerTwo === 1) {
                button.firstElementChild.textContent = 'O';
                updateBoard();
                checkWinner();
                if (!(headingText.textContent == "Player 2 Wins!" || headingText.textContent == "Player 1 Wins!")) {
                    headingText.textContent = "Player 1's Turn"
                    playerTwo = 0;
                    playerOne = 1; 
                }
            }
        })
    })
}


let headingText = document.querySelector('.playerturn');
// Player's turn: Need to change heading and symbol in event listener



// Event listener for restart button
let restartBtn = document.querySelector('.restart');
restartBtn.addEventListener('click', () => {
    clearBoard();
})

// function to clear board back to default upon restart button being clicked
function clearBoard() {
    let boxButtons = document.querySelectorAll('.boxgrid');
    headingText.textContent = "Player 1's Turn";
    boxButtons.forEach(button => {
        button.firstElementChild.textContent = '';
        
    })
}


// function to check for winner and change heading to reflect winner 
//gameBoard = ['','','','','','','','',''];
// function checkWinner() {
//     if (gameBoard[0] == gameBoard[1] && gameBoard[0] == gameBoard[2]) {
//         if (gameBoard[0] == "X") {
//             headingText.textContent = "Player 1 Wins!";
//         } else if (gameBoard[0] == "O") {
//             headingText.textContent = "Player 2 Wins!";
//         }
//     }
// }



// Run game 
chooseMove();


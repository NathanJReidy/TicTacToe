
gameBoard = ['','','','','','','','',''];
boxes = [];

for (i = 1; i <= 9; i++) {
    boxes.push(document.querySelector(`[id = "box${i}"]`));
}
//console.log(boxes[0].firstElementChild.textContent);

//console.log(boxes);

function updateBoard() {
    for (i = 0; i < 9; i++) {
        if (boxes[i].firstElementChild.textContent == 'X' || boxes[i].firstElementChild.textContent == 'O') {
            gameBoard[i] = boxes[i].firstElementChild.textContent; 
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
                console.log(gameBoard);
                headingText.textContent = "Player 2's Turn"
                playerOne = 0;
                playerTwo = 1;
            } else if (playerTwo === 1) {
                button.firstElementChild.textContent = 'O';
                updateBoard();
                console.log(gameBoard);
                headingText.textContent = "Player 1's Turn"
                playerTwo = 0;
                playerOne = 1;
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


chooseMove();

// THE UPDATEBOARD AND GAMEBOARD FUNCTION STUFF DOESN'T WORK CURRENTLY. 

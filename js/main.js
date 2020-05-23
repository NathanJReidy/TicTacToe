
// Event listener and function for choosing move
function chooseMove() {
    let allButtons = document.querySelectorAll('.boxgrid');
    allButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.firstElementChild.textContent = 'X';
        })
    })
}

chooseMove();

// Player's turn: Need to change heading and symbol in event listener


// Event listener for restart button


// function to clear board back to default upon restart button being clicked


// function to check for winner and change heading to reflect winner 
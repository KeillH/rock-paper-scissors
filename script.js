const tiles = document.querySelectorAll(".tile");
let userSelection;
tiles.forEach(tile => tile.addEventListener('click',getSelected));

function getSelected(e){
    //This function adds the .seleced class to the selected tile so users can see their choice

    //console.log(e.srcElement.alt); //This can be used for the user selection
    deselectTiles();
    this.classList.add("selected");
    updateSelectionText(e.srcElement.alt);
    userSelection = e.srcElement.alt;
}

function deselectTiles(){
    //When called it removes the .selected class from all tiles if it is present
    const tempTiles = document.querySelectorAll(".tile");
    tempTiles.forEach(tempTile => {
        if (tempTile.classList.contains("selected")===true){
            tempTile.classList.remove("selected");
        }
    });
    return;
}

function updateSelectionText(selected) {
    //This function will display the user selection in the text below the tiles and update to what the user has selected
    const text = document.querySelector('.selected-option');
    selected = selected.charAt(0).toUpperCase() + selected.slice(1); //Capatilising the first letter
    text.innerText = `You have selected: ${selected}!`;
}



const choices = ['rock','paper','scissors'];

        function getComputerChoice (){
            //Make it pick a random number between 0 and 2. The number picked will represent the index of the choices above
            let computer = choices[Math.floor(Math.random() * 3)];
            return computer;
        }

        function getUserChoice (){
            let userChoice = prompt('Enter: Rock, Paper or Scissors! ');
            userChoice = userChoice.toLowerCase();
            if (choices.indexOf(userChoice)=== -1){
                console.error('This is not a valid choice!');
                return 0;
            }
            return userChoice;
        }

        function playRound (userChoice, computerChoice){
            //returns 1: User wins
            //returns 0: User loses
            //returns 2: User tie
            if (userChoice === 'rock'){
                if (computerChoice === 'rock'){
                    return 2;
                } else if (computerChoice === 'paper'){
                    return 0;
                } else if (computerChoice === 'scissors'){
                    return 1;
                }
            }else if (userChoice === 'paper'){
                if (computerChoice === 'paper'){
                    return 2;
                }else if (computerChoice === 'scissors'){
                    return 0;
                }else if (computerChoice === 'rock'){
                    return 1;
                }
            }else if (userChoice === 'scissors'){
                if (computerChoice === 'scissors'){
                    return 2;
                }else if (computerChoice === 'rock'){
                    return 0;
                }else if (computerChoice === 'paper'){
                    return 1;
                }
            }
            return;
        }

        function play(rounds){
            let computerScore = 0;
            let userScore = 0;
            let userChoice = 0;
            for (let round = 1; round <=rounds;round++){
                while (userChoice === 0){
                    userChoice = getUserChoice();
                }
                let computerChoice = getComputerChoice();
                outcome = playRound(userChoice, computerChoice);
                console.log(`Round ${round}:`);
                if (outcome === 1){
                    userScore++;
                    console.log(`You win this round! ${userChoice} beats ${computerChoice}!`);
                } else if (outcome === 0){
                    computerScore++;
                    console.log(`You lose this round! ${computerChoice} beats ${userChoice}!`)
                } else {
                    console.log('It is a tie! Better luck next round!')
                }
                console.log(`User Score: ${userScore}. Computer Score: ${computerScore}`);
                userChoice = 0;
            }
            if (userScore > computerScore){
                console.log('Congradulations you win the game!');
            }else if (userScore < computerScore){
                console.log('Sorry the computer has gotten you this time!');
            } else {
                console.log('It is a tie, try playing again!');
            }
        }
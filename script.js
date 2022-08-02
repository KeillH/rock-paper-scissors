
const choices = ['rock','paper','scissors'];
let userSelection ='';
const tiles = document.querySelectorAll(".tile");
tiles.forEach(tile => tile.addEventListener('click',getSelected));

const playButton = document.querySelector(".play");
playButton.addEventListener('click',play); //If play had arugments then it would be ()=>{play(x,y,z)}

let round = 1;
let rounds = 5;
let computerScore = 0;
let userScore = 0;



function getSelected(e){
    //This function adds the .seleced class to the selected tile so users can see their choice
    deselectTiles();
    this.classList.add("selected");
    updateSelectionText(e.srcElement.alt);
    userSelection = e.srcElement.alt;
    return;
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
function getComputerChoice (){
    //Make it pick a random number between 0 and 2. The number picked will represent the index of the choices above
    let computer = choices[Math.floor(Math.random() * 3)];
    return computer;
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
}

function updateText () {
    const roundText = document.querySelector('.round');
    roundText.innerText = `Round ${round}/5:`;

    const userScoreText = document.querySelector('.user-score');
    userScoreText.innerText = `User Score: ${userScore}`;

    const computerScoreText = document.querySelector('.computer-score');
    computerScoreText.innerText = `Computer Score: ${computerScore}`;

}

function reset (){
    round =1;
    userScore = 0;
    computerScore = 0;
}




function play(){
    if (userSelection===''){return;}
    const outcomeText = document.querySelector('.outcome');

    if (round <= rounds){
        let computerChoice = getComputerChoice();
        outcome = playRound(userSelection, computerChoice);
        console.log(`Round ${round}:`);
        if (outcome === 1){
            userScore++;
            outcomeText.innerText = `You win this round, ${userSelection} beats ${computerChoice}!`;
            outcomeText.style.color = 'green';
        } else if (outcome === 0){
            computerScore++;
            outcomeText.innerText = `You lose this round, ${computerChoice} beats ${userSelection}!`;
            outcomeText.style.color = 'red';
        } else {
            outcomeText.innerText='It is a tie! Better luck next round!';
            outcomeText.style.color = 'yellow';
        }
        //console.log(`User Score: ${userScore}. Computer Score: ${computerScore}`);
        round++;
        deselectTiles();
        userSelection = '';
        updateText();
        if (round>rounds){
            if (userScore > computerScore){
                outcomeText.innerText = 'Congradulations you win the game!';
            } else if (userScore < computerScore){
                outcomeText.innerText = 'Sorry the computer has gotten you this time!';
            } else {
                outcomeText.innerText= 'It is a tie, try playing again!';
            }
            reset();
            updateText();
        }
    }
}

let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll('.choice');
const mess = document.querySelector('#mess');
const userScored = document.querySelector('#user-score');
const computerScored = document.querySelector('#comp-score');

const drawGame = () => {
    mess.innerText = "Match was a Draw! Play again ";
    mess.style.backgroundColor = "#081b31"
}

const showWinner = (userWin , userChoice , computerChoice) => {
    if (userWin) { 
        userScore++;
        userScored.innerText = userScore;
        mess.innerText = `You win! your ${userChoice} beats ${computerChoice}`;
        mess.style.backgroundColor = "green";
        userScored++;
    } else {
        computerScore++;
        computerScored.innerText = computerScore;
        mess.innerText = `You lose! ${computerChoice} beats your ${userChoice}`;
        mess.style.backgroundColor = "red";
        computerScored++;
    }
};

const genCompChoice = () => {
    let options = ['rock', 'paper', 'scissors'];
    let randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};

const playGame = (userChoice) => {
    const computerChoice = genCompChoice();

    if (userChoice === computerChoice) {
        drawGame();
    } else {
        userWin = true;
        if (userChoice === 'rock') {
            userWin = computerChoice === 'paper' ? false : true;
        } else if (userChoice === 'paper') {
            userWin = computerChoice === 'scissors' ? false : true;
        } else if (userChoice === 'scissors') {
            userWin = computerChoice === 'rock' ? false : true;
        }
        showWinner(userWin , userChoice, computerChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    });
});
function getComputerChoice() {
    let a = Math.floor(Math.random() * 3) + 1;
    switch (a) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }
}
function getHumanChoice() {
    let ch = prompt('enter your choice');
    ch = ch.toLowerCase()
    if (!(ch == 'rock' || ch == "scissors" || ch == 'paper')) {
        alert('try again');
        return
    }
    return ch
}
let humanScore = {
    value: 0
};
let computerScore = {
    value: 0
};
var handler = {
    set: function (obj, prop, value) {
        obj[prop] = value;
        score.textContent = `human : ${humanScore.value} computer : ${computerScore.value}`;
        return true;
    }
}
const score = document.querySelector('#score');
const proxy1 = new Proxy(humanScore, handler);
const proxy2 = new Proxy(computerScore, handler);
score.textContent = `human : ${humanScore.value} computer : ${computerScore.value}`
const lineBreak = document.createElement('br')

function playRound(humanChoice, computerChoice) {
    let actualHuman = humanChoice.toLowerCase();
    let text = ""
    let result = document.createTextNode(text)
    const content = document.querySelector('#results')
    switch (actualHuman) {
        case 'rock':
            switch (computerChoice) {
                case 'rock':
                    text = 'Tie!';
                    result = document.createTextNode(text);
                    content.appendChild(result);
                    content.appendChild(lineBreak.cloneNode(true));
                    break;
                case 'scissors':
                    text = 'you win,rock beats scissors';
                    result = document.createTextNode(text);
                    content.appendChild(result);
                    content.appendChild(lineBreak.cloneNode(true));
                    proxy1.value += 1;
                    break;
                case 'paper':
                    text = 'you lose,paper beats rock';
                    result = document.createTextNode(text);
                    content.appendChild(result);
                    content.appendChild(lineBreak.cloneNode(true));
                    proxy2.value += 1;
                    break;
            }
            break;
        case 'paper':
            switch (computerChoice) {
                case 'rock':
                    text = 'you win,paper beats rock';
                    result = document.createTextNode(text);
                    content.appendChild(result);
                    content.appendChild(lineBreak.cloneNode(true));
                    proxy1.value += 1;
                    break;
                case 'scissors':
                    text = 'you lose,scissors beats paper';
                    result = document.createTextNode(text);
                    content.appendChild(result);
                    content.appendChild(lineBreak.cloneNode(true));
                    proxy2.value += 1;
                    break;
                case 'paper':
                    text = 'tie';
                    result = document.createTextNode(text);
                    content.appendChild(result);
                    content.appendChild(lineBreak.cloneNode(true));
                    break;
            }
            break;
        case 'scissors':
            switch (computerChoice) {
                case 'rock':
                    text = 'you lose, rock beats scissors';
                    result = document.createTextNode(text);
                    content.appendChild(result);
                    content.appendChild(lineBreak.cloneNode(true));
                    proxy2.value += 1;
                    break;
                case 'scissors':
                    text = 'tie';
                    result = document.createTextNode(text);
                    content.appendChild(result);
                    content.appendChild(lineBreak.cloneNode(true));
                    break;
                case 'paper':
                    text = 'you win,scissors beats paper';
                    result = document.createTextNode(text);
                    content.appendChild(result);
                    content.appendChild(lineBreak.cloneNode(true));
                    proxy1.value += 1;
                    break;
            }
            break;

    }
    if (humanScore.value == 5) {
        alert('you win')
    };
    if (computerScore.value == 5) {
        alert('you lose bitch')
    }

}


const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

function handleClick(choice) {
    return function () {
        const humanChoice = choice;
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
}
rock.addEventListener('click', handleClick("rock"));
paper.addEventListener('click', handleClick("paper"));
scissors.addEventListener('click', handleClick("scissors"));

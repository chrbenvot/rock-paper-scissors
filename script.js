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
    ch=ch.toLowerCase()
    if (!(ch == 'rock' || ch == "scissors" || ch == 'paper')) {
        alert('try again');
        return
    }
    return ch
}
function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
        let actualHuman = humanChoice.toLowerCase();
        switch (actualHuman) {
            case 'rock':
                switch (computerChoice) {
                    case 'rock':
                        console.log('Tie!');
                        break;
                    case 'scissors':
                        console.log('you win,rock beats scissors');
                        ++humanScore;
                        break;
                    case 'paper':
                        console.log('you lose,paper beats rock');
                        ++computerScore;
                        break;
                }
                break;
            case 'paper':
                switch (computerChoice) {
                    case 'rock':
                        console.log('you win,paper beats rock');
                        ++humanScore;
                        break;
                    case 'scissors':
                        console.log('you lose,scissors beats paper');
                        ++computerScore;
                        break;
                    case 'paper':
                        console.log('tie');
                        break;
                }
                break;
            case 'scissors':
                switch (computerChoice) {
                    case 'rock':
                        console.log('you lose, rock beats scissors');
                        ++computerScore;
                        break;
                    case 'scissors':
                        console.log('tie');
                        break;
                    case 'paper':
                        console.log('you win,scissors beats paper');
                        ++humanScore;
                        break;
                }
                break;

        }

    }
    for (let i=0;i<5;i++){
        playRound(getHumanChoice(),getComputerChoice())
    }
    (humanScore>=computerScore) ? alert('you win!! '+humanScore+' to '+computerScore) : alert('you lose biiiiiitch '+humanScore+' to '+computerScore)
}
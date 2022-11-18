class Game{
    constructor() {
        this.playerScore = 0;
        this.computerScore = 0;
    }

    playTurn(playerInput) {
        const computerChoice = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
        return [this.pickWinner(playerInput, computerChoice), computerChoice, this.playerScore, this.computerScore];

    }

    pickWinner(player, computer) {
        let result = "";
        if (player === computer) {
            result = "Tie";
        }
        else if (player === 'rock') {
            if (computer === 'paper') {
                result = "Computer Won"
                this.computerScore++;
            }
            else if (computer === 'scissors') {
                result = "Player Won"
                this.playerScore++;
            }
        }
        else if (player === 'paper') {
            if (computer === 'scissors') {
                result = "Computer Won"
                this.computerScore++;
            }
            else if (computer === 'rock') {
                result = "Player Won"
                this.playerScore++;
            }
        }
        else if (player === 'scissors') {
            if (computer === 'rock') {
                result = "Computer Won"
                this.computerScore++;
            }
            else if (computer === 'paper') {
                result = "Player Won"
                this.playerScore++;
            }
        }
        return result;

    }
}

module.exports = Game;
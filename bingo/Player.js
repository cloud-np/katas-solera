const seedrandom = require('seedrandom');
const randNum = seedrandom(0);

class Player {
    constructor(name) {
        this.name = name;
        this.numbers = [
            [...Array(15).keys()].slice(1).sort(() => Math.random() - 0.5).slice(0, 5),
            [...Array(31).keys()].slice(16).sort(() => Math.random() - 0.5).slice(0, 5),
            [...Array(46).keys()].slice(31).sort(() => Math.random() - 0.5).slice(0, 5),
            [...Array(61).keys()].slice(46).sort(() => Math.random() - 0.5).slice(0, 5),
            [...Array(76).keys()].slice(61).sort(() => Math.random() - 0.5).slice(0, 5),
        ];
        this.numbers[2][2] = 0;
        this.callsBingoAtTurn = Math.floor(randNum() * 50) + 24;
        this.hasLost = false;
        this.won = false;
    }

    callBingo(turn) {
        if (turn === this.callsBingoAtTurn)
            return true;
        return false;
    }
        
    checkBingo(givenNumbers) {
        let arr1d = [].concat(...this.numbers);
        let count = 0;
        arr1d.forEach((num, index) => {
            if (num === 0) return;
            if(givenNumbers.includes(num))
                count++;
        });
        if(count === 24) {
            this.won = true;
            return true;
        }else if (count > 24){
            console.log('Error: count > 24');
        }else{
            this.hasLost = true;
            return false;
        }
    }
}

module.exports = Player;
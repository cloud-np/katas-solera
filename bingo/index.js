const seedrandom = require('seedrandom');
const randNum = seedrandom(0);
const Player = require('./Player');


const nPlayers = [];
for (let i = 0; i < 100; i++) {
    nPlayers[i] = new Player(`Player ${i}`);
    // nPlayers[i] = [
    //     Array.from({length: 5}, () => Math.floor(randNum() * 15) + 1),
    //     Array.from({length: 5}, () => Math.floor(randNum() * 15) + 16),
    //     Array.from({length: 5}, () => Math.floor(randNum() * 15) + 31),
    //     Array.from({length: 5}, () => Math.floor(randNum() * 15) + 46),
    //     Array.from({length: 5}, () => Math.floor(randNum() * 15) + 61),
    // ];
}

const numbersCalled = [...Array(76).keys()].slice(1).sort(() => Math.random() - 0.5);
let turn = 0;
let bingo = false;
while (turn < 75) {
    // console.log("At turn " + turn + " number " + numbersCalled[turn] + " was called")
    nPlayers.forEach(player => {
        if (bingo) return;
        if (!player.hasLost) {
            if (player.callBingo(turn)) {
                if (player.checkBingo(numbersCalled.slice(0, turn))) {
                    console.log(`${player.name} won!`);
                    bingo = true;
                    return
                } else {
                    console.log(`${player.name} lost!`);
                }
            }
        }
    });
    if (bingo) break;
    turn++;
}


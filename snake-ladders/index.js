// Make a 2D array of 10x10
const gameBoard = new Array(100).fill(null);

const player = {
    pos: 99,
    "type": "player"
};
const snake = {
    start: 24,
    end: 88,
    "type": "snake"
};
const ladder = {
    start: 14,
    end: 7,
    "type": "ladder"
};

// Add snake and ladder to the gameBoard
gameBoard[snake.start] = snake;
gameBoard[ladder.start] = ladder;
gameBoard[player.pos] = player;

// Function to print the gameBoard
const printGameBoard = () => {
    // Loop through the gameBoard
    let str = "";
    for (let i = 0; i < gameBoard.length; i++) {
        // Print the snake and ladder
        if (gameBoard[i] === null) {
            str += '- ';
        } else if (gameBoard[i].type === 'snake') {
            str += 'S ';
        } else if (gameBoard[i].type === 'ladder') {
            str += 'L ';
        } else if (gameBoard[i].type === 'player') {
            str += 'P ';
        }
        // Print a new line
        if (i % 10 === 9) {
            console.log(str);
            str = "";
        }
    }
};

// function waitForKey(keyCode) {
//     return new Promise(resolve => {
//         process.stdin.on('data',function (chunk) {
//             if (chunk[0] === keyCode) {
//                 resolve();
//                 process.stdin.pause();
//             }
//         });
//     });
// }
// Print the gameBoard
let turns = 0;
const playGame = () => {
    while (true) {
        const diceRoll = Math.floor(Math.random() * 6) + 1;
        gameBoard[player.pos] = null;
        player.pos -= diceRoll;
        gameBoard[player.pos] = player;
        if (gameBoard[player.pos]) {
            if (gameBoard[player.pos].type === 'snake') {
                player.pos = gameBoard[player.pos].end;
            } else if (gameBoard[player.pos].type === 'ladder') {
                player.pos = gameBoard[player.pos].end;
            }
        }
        if (player.pos <= 0) {
            player.pos = 0;
            console.log("Player won! Turns: " + turns);
            break;
        }
        printGameBoard();
        console.log();
        turns++;
        // await waitForKey(65);
    }
}
playGame()
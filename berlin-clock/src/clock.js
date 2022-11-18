export function lampSecond(seconds) {
    return seconds % 2 === 0 ? 'Y' : 'O';
}

export function getSingleHour(hours) {
    const reds = hours % 5;
    return 'R'.repeat(reds) + 'O'.repeat(4 - reds);
}

export function get5Hours(hours) {
    const reds = Math.floor(hours / 5);
    return 'R'.repeat(reds) + 'O'.repeat(4 - reds);
}


export function get5Minutes(minutes) {
    const yellow = Math.floor(minutes / 5);
    const row = 'Y'.repeat(yellow) + 'O'.repeat(11 - yellow);
    const newRow = row.split('').map((char, index) => {
        if (index !== 0 && index % 3 === 2 && char === 'Y')
            return 'R';
        return char;
    });
    return newRow.join("");
}

export function getSingleMinutes(minutes) {
    const yellow = minutes % 5;
    return 'Y'.repeat(yellow) + 'O'.repeat(4 - yellow);
}
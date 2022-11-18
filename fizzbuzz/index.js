
let subtitutes = [{'name': 'fizz ', 'val': 3}, {'name': 'buzz ', 'val': 5}, {'name': 'pop ', 'val': 7}];

for(let i = 1; i < 100; i++){
    let output = "";
    subtitutes.forEach(sub =>  i % sub['val'] === 0 ? output += sub['name'] : null)
    // if (i % 3 === 0) output += "fizz ";
    // if (i % 5 === 0) output += "buzz ";
    // if (i % 7 === 0) output += "pop ";
    console.log(output || i);
}
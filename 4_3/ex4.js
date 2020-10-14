let symbol = "*";
let inputLine = " ";
let number = 5;
let lineValue = 0;
let columnValue = 0;

for (let lineValue = 0; lineValue < number; lineValue += 1) {
    for (let columnValue = 0; columnValue < number - 2; columnValue += 1) {
        if (columnValue < number - lineValue - 2) {
            inputLine = inputLine + " ";
        } else {
            inputLine = inputLine + symbol;
        }
    }
    for (lineValue; lineValue < number - 3; lineValue += 1) {
        if (lineValue < 1) {
            inputLine = inputLine;
        } else {
            inputLine = inputLine + symbol;
        }
    }
    }
    console.log(inputLine);
    symbol = "*";
    inputLine = " ";
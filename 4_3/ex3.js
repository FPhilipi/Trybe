let symbol = "*";
let inputLine = " ";
let number = 5;
let lineValue = 0;
let columnValue = 0;

for (let lineValue = 0; lineValue < number; lineValue += 1) {
    for (let columnValue = 0; columnValue < number; columnValue += 1) {
        if (columnValue < number - lineValue - 1) {
            inputLine = inputLine + " ";
        } else {
            inputLine = inputLine + symbol;
        }
    }
    console.log(inputLine);
    symbol = "*";
    inputLine = " ";
}

// inputLine = inputLine + " ";
// inputLine = inputLine + symbol;

// console.log(inputLine);


// let n = 5;
// let lineIndex;
// let columnIndex;
// let symbol = "*";
// let inputLine = "";
// let inputPosition = n;

// for (lineIndex = 0; lineIndex < n; lineIndex++) {
//   for (columnIndex = 0; columnIndex <= n; columnIndex++) {
//     if (columnIndex < inputPosition) {
//       inputLine = inputLine + ' ';
//     } else {
//       inputLine = inputLine + symbol;
//     }
//   }
//   console.log(inputLine);
//   inputLine = '';
//   inputPosition--;
// };




// let print = ["", "", "", "", ""];

// for (let index = 0; index < print.length; index += 1) {
//      print.push("*");
//      print.shift();
//      console.log(print);
//  }






function lowerIndex(array) {
    let lIndex = 0;
    for (let index in array) {
        if (array[index] < array[lIndex]) {
            lIndex = index;
        }
    }
    return lIndex;
}

console.log(lowerIndex([2, 4, 6, 7, 10, 0, -3]));

// function returnLowerValue(array) {
// let lowerValue;

// for (let index = 0; index < array.length -1; index += 1) {
//     if (array[index] < array[index + 1]) {
//         lowerValue = index;
//     } 
//     else {
//         lowerValue = index+1;
//     }
// }
// return lowerValue;
// }

// console.log(returnLowerValue([2, 4, 6, 7, 10, 0, -3]));
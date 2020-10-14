function indiceMaior(array) {

let indiceM = 0;

for (let indice in array) {
    if (array[indice] > array[indiceM]) {
        indiceM = indice;
    }
}
return indiceM;
}
console.log(indiceMaior([2, 3, 6, 7, 10, 1]));


// function returHigherValue (array) {

// let higherValue;

// for (let index = 0; index < array.length -1; index += 1) {
//     if (array[index] > array[index + 1]) {
//         higherValue = index;
//     } 
//     else {
//         higherValue = index+1;
//     }
// }
// return higherValue;
// }

// console.log(returHigherValue([2, 3, 6, 7, 10, 1]));
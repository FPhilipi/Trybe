let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];

for (let i = 0; i < array.length; i += 1) {
    if (i < array.length - 2) {
        newArray.push(array[i]*array[i+1]);
    } else {
        newArray.push(array[array.length - 1] * 2);
    }
    
}
        
console.log(newArray);


// for (let i = 1; i < array.length; i += 1) {
//     let mult = array[i]*array[i-1];
//     newArray.push(mult);
// }
        
// console.log(newArray);

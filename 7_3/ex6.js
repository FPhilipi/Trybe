const assert = require('assert');
// escreva a função addOne aqui

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
// const output = addOne(myArray);

const addOne = (arrayInPut) => {
    for (index in arrayInPut) {
        arrayInPut[index] +=1; 
    }
    return arrayInPut;
}
// addOne(myArray);

// assert.strictEqual(typeof addOne, 'function');
// assert.deepEqual(addOne(myArray), expected);
assert.deepEqual(addOne(myArray), unchanged);
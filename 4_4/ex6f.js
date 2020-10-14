function sumNumber(number) {
let sum = 0;

for (let index = 1; index <= number; index += 1) {
    sum = sum + index;
}
return sum;
}

console.log(sumNumber(5));

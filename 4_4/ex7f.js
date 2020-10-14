function compareName(stringWord, stringEnding) {

let balance = 0;
let soma = 0;
let outPut;

balance = stringWord.length - stringEnding.length;

for (let index = 0; index <= stringEnding.length - 1; index += 1) {
    
     if (stringEnding[index] == stringWord[index + balance]) {
         soma += 1;
     }
 }

if (soma == stringEnding.length) {
     outPut = "true";
 } else {
     outPut = "false";
 }
return outPut; 
}

console.log(compareName("fabi","abi"));
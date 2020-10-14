let palavra = "oiaio";
let sum = 0;

if (palavra.length % 2 == 0) {
  for (let index = 0; index < ((palavra.length)/2); index += 1) {
    if (palavra[index] == palavra[palavra.length - 1 - index]) {
      sum += 1;
    }
  }
  if (sum == (palavra.length/2)) {
  console.log("Palíndromo");
  } else {
  console.log("NP");
  }
  } else {  
  for (let index = 0; index < ((palavra.length-1)/2); index += 1) {
    if (palavra[index] == palavra[palavra.length - 1 - index]) {
        sum += 1;
    }
  }
  if (sum == ((palavra.length-1)/2)) {
    console.log("Palíndromo");
    } else {
    console.log("NP");
    }
}
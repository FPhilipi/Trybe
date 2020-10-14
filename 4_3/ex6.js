let number = 3;
let sum = 0;

if (number < 4) {
    console.log("Primo");
} else {
    for (let contFora = 2; contFora < number; contFora += 1) {
        if (number % contFora == 0) {
    sum += 1;
    }
    }
    if (sum > 0) {
    console.log("Não primo");
    }
    else {
    console.log("Primo");    
    } 
} 

    
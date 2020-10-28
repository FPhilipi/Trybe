// var numArray = [];
// for (var i = 0; i < 3; i++) {
//   numArray.push(i);
// }
// console.log(numArray);
// // returns [0, 1, 2]
// console.log(i);
// // returns 3

// 1. Crie uma função que receba um número e retorne seu fatorial
const num = 3;
if (num > 1) {
      let result = 1;
      for (let index = 1; index <= num; index++) {
        result = result * index;
    }
    console.log(result);  
}

// 2. Crie uma função que receba uma frase e retorne qual a maior palavra
let phrase = "Bom dia";
let wordPhrase = phrase.split(" ");
let larger = "";

for (word of wordPhrase) {
    if (word.trim().length > larger.length);
      larger = word.trim();
    };
console.log(larger);

// Função 1: Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string.

const skills = newSkill => {
    let string = "foco nos x";
    let swap = string.replace('x', newSkill);
    return swap;
}

console.log(skills("estudos"));

// function skills(string) {
//     let newSkill = "desenvolvedora";
//     let wordPhrase = string.split(" ");
//     // console.log(wordPhrase);
//     for (word of wordPhrase) {
//         if (word.trim() === "x") {
//             word.trim() === newSkill;
//             console.log(wordPhrase);
//         }        
//     }
// }
// skills("persistente x bem-humorada");

// Função 2: Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string.

const array = ['javascript', 'html', 'css'];
const concatWorldArray = swap => {
const ordered = array.sort();
let newOder = [];
let newString = `
${swap}
minhas habilidades são:
`
for (let index = 0; index < ordered.length; index++) {
  newOder = ordered[index];
  newString += `
  ${newOder}
  `
}
return newString;
}

console.log(concatWorldArray(skills("plantões")));


var inss;
var ir;

var bruto = 3500.00;

if (bruto <= 1556.94) {
  inss = bruto * 0.08;
} else if (bruto <= 2594.92) {
  inss = bruto * 0.09;
} else if (bruto <= 5189.82) {
  inss = bruto * 0.11;
} else {
  inss = 570.88;
}

var base = bruto - inss;

if (base <= 1903.98) {
  ir = 0;
} else if (base <= 2826.65) {
  ir = base * 0.075 - 142.80;
} else if (base <= 3751.05) {
  ir = base * 0.15 - 354.80;
} else if (base <= 4664.68) {
  ir = base * 0.225 - 636.13;
} else {
  ir = base * 0.275 - 869.36;
};

console.log("Salário: " + (base - ir));
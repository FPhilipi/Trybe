let peca = "BISPO";

switch (peca.toLowerCase()) {
    case "torre":
    console.log("se move em linha reta horizontalmente e verticalmente pelo número de casas não ocupadas, até atingir o final do tabuleiro ou ser bloqueado por outra peça");
    break;
    case "bispo":
    console.log("zig-zag");
    break;
    default:
    console.log("erro");
    break;
};        
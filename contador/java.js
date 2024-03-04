let nome ; // valor manipulavel
let idade;


nome = "Luiz"; // String
idade = 20; // Number


const altura =  1.70; // Valor Constante


let bol = true // Boolean
let lista = ["Banana", "Manzana", "uva"]; //Lista
let objeto = {nome: "Jv", idade : 27, } // objeto
 


// Operadores Aritimeticos


let a = 16;


let b = 56;


let soma = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a / b;
let resto = a % b;


// Opradores de Atribiuição
let x = 10;


x += 5;
x -= 3;
x *= 2;
x /= 4;


// Operadores de comparação logica
idade = 20;
let temCNH = true;


console.log(idade > 18); // idade maior que 18? (TRUE)
console.log(idade === 20); // idade igual a 20? (TRUE)
console.log(idade !== 18); // idade é diferente de 18? (TRUE)

// = Atribuição
// == Igualdade Solta
// === Igualdade Estrita (Leva em consideração o tipo do dado)


// let a (O valor de a pode mudar)
// const b (O valor de b não pode mudar)

// Tipos de dados:
num = 5
str = "Olá mundo"
Bool = true
obj = {Chave: "valor"}






console.log(idade > 18 && temCNH);
console.log(idade > 18 || temCNH);


// Estrutura de Condição
let hora = 12;


if(hora < 12){
    console.log("Bom dia!");
} else if (hora >= 12 && hora <= 18){
    console.log("Boa Tarde");
} else{
    console.log("Boa noite!")
}


// Estrutura de repetição


for (let i = 0; i<10; i++){
    console.log(i)
}


let contador = 0
while (contador < 5){
    console.log(contador);
    contador++;
}

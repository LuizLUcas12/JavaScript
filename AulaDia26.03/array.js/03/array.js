var listaDeFrutas = ["Maças", "Uvas", "Bananas", "Abacaxis", "Cajus"]

var primeiroItem = listaDeFrutas[0]; 
var segundoItem = listaDeFrutas[1]; 
var terceiroItem = listaDeFrutas[2];

listaDeFrutas.forEach(function(item, indice){
    console.log(item, indice)
})
/* forEac = é um for que percorre tuda uma lista*/
var posicao = listaDeFrutas.indexOF("Bananas")

//Adcionar - Remover Itens da lista //

//No final do lista//
listaDeFrutas.push ("Laranjas")//["Maçãs", "Uvas", "Bananas","Abacaxis", "Cajus", "Laranjas"]

//Adcionar no inicio da lista//
listaDeFrutas.unshift("kiwis") //["Kiwis", "Maças", "Uvas", "Bananas", "Abacaxis", "Cajus", "Laranja"]

//Remover item da lista//

//Remover primeiro item//
listaDeFrutas.shift() //["Maças", "Uvas", "Bananas", "Abacaxis", "Cajus", "Laranja"]

//Remove o ultimo item//
listaDeFrutas.pop()//["Maças", "Uvas", "Bananas", "Abacaxis", "Cajus"]

listaDeFrutas.indexOf("Bananas") 


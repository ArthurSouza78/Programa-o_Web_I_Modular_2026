/*
Tipos de variaveis

let (é uma variavel que pode mudar de valor)
const (significa constante e não pode mudar de valor)
Exemplos
*/
const cpf = "49833763804"
console.log(cpf)
//cpf = "22077097877"
console.log(cpf) // Erro! Assignment to constant variable. //
/* 
Variaveis criadas fora de {} (Bloco de instruçôes) são 
chamadas  de escopo global, ou seja, você pode usar
a variavel em qq parte do codigo.

variaveis dentro do (bloco) após a saida do bloco a variavel é deletada
*/

// Tipos de variaveis - OBS: Em JS Não precisa declarar o tipo ou tipagem.

let num1 = 10 // Variaveis são chamadas de "number"
let num2 = 10.5 // tipo double
let nome = "Gilmar" // String
let verdade = true // Tipo boolean
let resposta // undefined
let saldo = null // foi definida com valor nulo

// Como saber o tipo de variavel: use o typeof

console.log(typeof num1)
console.log(typeof num2)
console.log(typeof nome)
console.log(typeof verdade)
console.log(typeof resposta)
console.log(typeof saldo)



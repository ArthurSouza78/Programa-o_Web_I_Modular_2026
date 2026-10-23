/*
Array em JavaScript

O que é?

Uma variável armazena apenas 1 valor
enquanto o array armazena multiplos valores
*/

//ex01:
//estrutura
//let frutas = ["maçã", "banana", "uva"]
//console.log(frutas)
//console.log(frutas[0])

//posso usar o loop para mostrar o array
/*
for(let i = 0; i < frutas.length; i++ ){
    console.log(`A ${i + 1}° Fruta é ${frutas[i]}`)
}
*/

/*
metodos array
pop() remove o item do fim da fila
push() adiciona um item no fim da fila
shift() remove o primeiro item da fila
unshift() adiciona um item no inicio da fila
length - conta o tamanho do array
*/

let frutas = ["maçã", "banana", "uva"]

frutas.push("morango")
frutas.push("pera")
frutas.unshift("abacate")
frutas.shift()
frutas.pop()


console.log(frutas)
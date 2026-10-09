alert("Aula de SwitchCase")

let num1 = Number(prompt("Insira o primeiro número"))
let num2 = Number(prompt("Insira o segundo numero"))
let soma, mult

let escolha = Number(prompt("digite 1 para soma ou 2 para Multiplicação"))
switch(escolha){
    case 1:{
        soma = num1 + num2
        alert(`Você esolheu soma. A soma dos números é ${soma}`)
    }
    break

    case 2:{
            mult = num1 * num2
            alert(`Você esolheu multiplicação. A Multiplicação dos números é ${mult}`)
        }
    break
    default: alert("Erro. opção inválida")
}
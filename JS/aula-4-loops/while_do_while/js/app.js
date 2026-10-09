let num1, num2, soma, mult, escolha, loop

do{
    alert("Aula de SwitchCase")
    num1 = Number(prompt("Insira o primeiro número"))
    num2 = Number(prompt("Insira o segundo numero"))
    escolha = Number(prompt("digite 1 para soma ou 2 para Multiplicação"))
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
    loop = Number(prompt("Você quer continuar? Digite 1 p/ sim e qualquer outro número p/ não."))
    
}
while(loop == 1)
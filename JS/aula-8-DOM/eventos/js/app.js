/*
Em JS podemos manipular a estrutura do HTML em eventos
1- click disparado quando o usuario clica no elemento
*/

let titulo = document.getElementById("t1")

function alterarTitulo(){
    let novoTitulo = prompt("Digite o novo titulo")
    titulo.textContent = novoTitulo
}


/*

2 - mousemove- Ativado continuamente enquanto o cursor se move sobre o elemento.

*/
    let blackDiv = document.getElementById("caixa")
    function mudarCorSaida(){
        blackDiv.style.backgroundColor = "green"
    }
    function mudarCor(){
        blackDiv.style.backgroundColor = "blue"

    console.log(mudarCor)
}


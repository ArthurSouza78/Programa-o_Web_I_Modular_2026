/*
Objetos em JavaScript

O que é?

Objetos em JS armazenam dados organizados com chave e valor
ex01:
*/
let aluno = {
    nome: "Arthur",
    sobrenome: "Souza",
    matricula: "12345",
    funcao: "Aluno"

}
// Com looping for in conseguimos percorrer o objeto
for(let chave in aluno){
    console.log(`${chave}: ${aluno[chave]}`)
}
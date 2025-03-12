let nome = "Mateus"

console.log(nome, " nasceu em 1984.")
console.log("Em 2020", nome, "conheceu Maria")
console.log(nome, "casou-se com Maria em 2012")
console.log("Maria teve 1 filho com", nome, "em 2015.")
console.log("O filho de", nome, "se chama Eduardo")

let nome2 // Declarou a variavel mas não inicializou ela
nome2 = "Qualquer Valor" // Inicializando a variável
console.log(nome2)
nome2 = "Outro nome" // será alterado a partir dessa variável
console.log(nome2)

// Não podemos criar variáveis com palavras reservadas
// let if; // por exemplo
// Variáveis precisam ter nomes significativos
let n = "João"
console.log(n) // não sabemos qual variavel é
// Em trabalhos na área vamos declarar nomes // ex:
let nomeCliente = "Aline"
console.log(nomeCliente)

// Não pode começar o nome de uma variável com um número
let nome1
// Não podem conter espaços ou traços
//  let nome Cliente // ERRADO
// Ultilizamos camelCase
let nomeCliente2 // CERTO

// Case-sensitive
// let nomeCliente3 = 'Luiz'
// let nomeCliente3 = 'Otavio'

// Não podemos redeclarar variáveis com let

// NÃO UTILIZE VAR, UTILIZE LET.
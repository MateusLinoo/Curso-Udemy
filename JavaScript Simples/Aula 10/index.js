// String, number, undefined, null, boolean
const nome = 'Mateus' // String
const nome1 = "Mateus" // String
const nome2 = `Mateus` // String

const num1 = 10 // number
const num2 = 10.20 // number

let nomeAluno // undefined = não aponta pra local nenhum na memória
let sobrenomeAluno = null  // Nulo = não aponta pra local nenhum na memória
const aprovado = false // Boolean = true, false (lógico)

console.log(typeof nome, nome) // typeof = para ver o tipo de dado primitivo

const a = [ 1, 2]
const b = a
console.log(a, b)

b.push(3)
console.log(a, b)
// quando trabalhamos com trabalho por referencia, fazemos o valor de 'b' apontar para o 'a'
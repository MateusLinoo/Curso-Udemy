/* 
Mateus Malinouskas tem 19 anos, pesa 69kg
tem 1.74 de altura e seu IMC é de 22.79
Mateus nasceu em 2005
*/

const nome = "Mateus"
const sobrenome = "Malinouskas"
const idade = 19
const peso = 69
const alturaEmM = 1.74
let imc
imc = peso / (alturaEmM * alturaEmM)
let anoNascimento
const anoAtual = 2025
anoNascimento = anoAtual - idade - 1

console.log(
  nome,
  sobrenome,
  "tem",
  idade,
  "anos, pesa",
  peso,
  "kg, tem",
  alturaEmM,
  "de altura e seu IMC é de",
  imc
)
console.log(nome, "nasceu em", anoNascimento)

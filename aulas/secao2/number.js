let num1 = 100
let num2 = 2.578934

console.log(num1.toString() + num2) // qualquer string somada a um numero ira realizar uma concatenacao e nao uma adicao // toString não muda o tipo de num1, apenas retorna ele como string
console.log(typeof(num1)) // o tipo de num1 continua number
num1 = num1.toString() // assim pode alterar o tipo de num para string
console.log(typeof(num1))
num1 = Number(num1) // volta a ser number
console.log(typeof(num1))
console.log(num1.toString(2)) // retorna o valor de num1 convertido em binario em uma string
console.log(num2.toFixed(2)) // corta casas decimais pode ser mais de 2
console.log(Number.isInteger(num1)) // retorna um boolean, true se a variavel for inteiro, falso se nao 
let temp = num1 * 'Aoba'
console.log(Number.isNaN(temp)) // verifica se é um NaN e retorna um boolean

let num3 = 0.7
let num4 = 0.1

console.log(num3 + num4) // Tem um pouco de imprecisao por causa do padrao IEEE 745-2008 era pra da 0.8 mas deu 0.79999999999999

num3 += num4 
num3 += num4 
num3 += num4 
console.log(num3)

console.log(num3.toFixed(2)) // parece certo porem nao é inteiro 
console.log(Number.isInteger(num3)) // nao é inteiro, foi verificado o binario
num3 = parseFloat(num3.toFixed(2)) // essa forma é a correta para fixar esse problema
console.log(Number.isInteger(num3)) // agr é um inteiro
num3 = Number(num3.toFixed(2)) // outra forma correta para fixar esse problema
console.log(Number.isInteger(num3)) // agr é um inteiro
num3 = 0.7
num4 = 0.1
num3 = ((num3 * 100) + (num4 * 100)) / 100 // outra forma de fixar
console.log(num3)

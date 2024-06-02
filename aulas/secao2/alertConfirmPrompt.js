alert('Nossa mensagem') // retorna um valor undefined

let opcao = confirm('Deseja apagar a mensagem?') // retorna um boolean
console.log(opcao)
let num1 = prompt('Digite um numero') // retorna uma string q o usuario digitar
let num2 = prompt('Digite outro numero') // retorna uma string q o usuario digitar
console.log(typeof(num1))
console.log(typeof(num2))
num1 = Number(num1)
num2 = Number(num2)
console.log(typeof(num1))
console.log(typeof(num2))
alert(`a soma dos numeros digitados é ${num1 + num2}`)
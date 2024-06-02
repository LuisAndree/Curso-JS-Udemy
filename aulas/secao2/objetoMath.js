 let num1 = 9.234231

 console.log(Math.floor(num1)) // arredonda pra baixo
 console.log(Math.ceil(num1)) // arredonda pra cima
 console.log(Math.round(num1)) // apartir d0 .50 é arredondado pra cima, no .49 é pra baixo
console.log(Math.max(1, 2, 3, 100, 2342, 13234, 414, 432, 5, 6)) // retorna o maior valor
console.log(Math.min(1, 2, 3, 100, 2342, 13234, 414, 432, 5, 6)) // retorna o menor valor
let num2 = Math.random() // numero aleatorio
console.log(num2)
num2 = Math.random() * ((10 - 5) + 5) // numero aleatorio com range 
console.log(num2)
num2 = Math.round(Math.random() * ((10 - 5) + 5)) // numero aleatorio com range e arredondado
console.log(num2)
console.log(Math.PI) // valor de PI
console.log(Math.pow(10, 3)) // potenciação, msm coisa de 10 ** 3
console.log(Math.pow(9, 0.5)) // maneira de fzr raiz quadrada
console.log(9 ** (1/2)) // outra maneira de fzr raiz quadrada
console.log(9 ** 0.5) // outra maneira de fzr raiz quadrada
console.log(27 ** (1/3)) // raiz cubica e assim por diante
console.log(100 / 0) // em JS nao da erro, retorna Infinity que é tratado como verdadeiro
console.log(!!(100 / 0)) // ao negar 2 vezes, verifica se é true
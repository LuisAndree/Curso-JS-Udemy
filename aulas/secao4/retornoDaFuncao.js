// return 
//retorma um valor e finaliza a funcao

function falaFrase(comeco) {
    console.log(arguments)
    function falaResto(resto) {
        console.log(arguments)
        return comeco + '' + resto
    }
    return falaResto
}

const fala = falaFrase('ola')
const resto = fala(' mundo')

console.log(resto)

console.log('###################')

function addSquares(a, b) {
    function square(x) {
        return x * x;
    }
    return square(a) + square(b);
}
a = addSquares(2, 3); // retorna 13
b = addSquares(3, 4); // retorna 25
c = addSquares(4, 5); // retorna 41

console.log(a)
console.log(b)
console.log(c)

console.log('###################')

function fora(x) {
    console.log('argumentos de fora = ', arguments)
    function dentro(y) {
        console.log('argumentos de dentro = ', arguments)
        return x + y;
    }
    return dentro;
}
fn_inside = fora(3); // Pense nisso como: Receba uma função que adicionará 3 ao que quer que você repasse para ela
console.log('fn_inside = ', fn_inside)
result = fn_inside(5); // retorna 8
console.log('result = ', result)
result1 = fora(3)(5); // retorna 8
console.log('result1 = ', result1)

console.log('###################')

function criaMultiplicador(multiplicador) {
    return function(n){
        return n * multiplicador
    }
}

const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
const quadriplica = criaMultiplicador(4)

console.log(duplica(25))
console.log(triplica(25))
console.log(quadriplica(25))

console.log('###################')

function A(x) {
    function B(y) {
      function C(z) {
        console.log(x + y + z);
      }
      C(3);
    }
    B(2);
  }
  A(1); // Exibe o valor 6 (1 + 2 + 3)
  
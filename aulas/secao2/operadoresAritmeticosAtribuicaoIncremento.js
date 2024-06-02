const num1 = 2;
const num2 = 4;
const num3 = 10;
const num4 = 3;
 
console.log(num1 + num2) // adição
console.log('luis ' + 'andre') // concatenção
console.log(num3 - num1) //subtração
console.log(num3 / num1) // divisão
console.log(num1 * num2) // multiplicação
console.log(num2 ** num1) // potenciação
console.log(num3 % num4) // resto da divisão

/*
Precedencia 
()
**
* / %
+ -
OBS: em caso de operadores com mesma precedencia é executado em sequencia da esquerda para direita
*/

let contador = 1;
contador++; // ++ operador de incremento, não pode ser usado em const. pode ser usado prefixado e posfixado
console.log(contador)
console.log(++contador) // quando usamos o prefixado, faremos a operação antes da ação a ser executada - vai da 3 pq ele somou +1 antes de printar
console.log(contador++) // quando usamos o posfixado, faremos a operação depois da ação a ser executada - vai da 3 pq ele nao somou +1 antes de printar
// -- é o operador de decremento

// Operadores de atribuição
contador += 2;
console.log(contador)
contador -= 2;
console.log(contador)
contador *= 2;
console.log(contador)
contador /= 2;
console.log(contador)
contador **= 2;
console.log(contador)
contador %= 2;
console.log(contador)

// NaN - Not a Number
const num5 = 10;
let nome = 'Luis'

console.log(num5 * nome) // not a number -- se fosse o oerador + seria feita uma concatenação
console.log(num5 + nome) // concatenação
nome = '5'
console.log(num5 * nome) // o JS é um trem muito doido sio, ele vai tenta fzr a conta se a string for um número
nome = parseInt('5') // converte a string para um tipo numero inteiro ignorando casas decimais se tiver
console.log(typeof(nome))
nome = parseFloat('5.2') // converte a string para tipo numero considerando casas apos o ponto
console.log(typeof(nome))
nome = Number('5.5') // faz a convrsao da string para tipo Number 
console.log(typeof(nome))



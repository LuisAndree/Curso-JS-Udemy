/*
Operadores de comparação
>       maior q
>=      maior ou igual q
<       menor q
<=      menor ou igual q
==      igualdade   (valor) ***** cuidado/evitar
===     igualdade estrita (valor e tipo) 
!=      diferene    (valor) ***** cuidado/evitar
!==     diferente estrito (valor e tipo)
*/

console.log(10 > 5)
console.log(10 >= 5)
console.log(10 < 5)
console.log(10 <= 5)
console.log(10 == 5)
console.log(10 === 5)
console.log(10 != 5)
console.log(10 !== 5)

const num1 = 10
const num2 = '10'
console.log(num1 == num2) // da verdadeiro pq os valores sao iguais embora os tipos sejam diferentes
console.log(num1 === num2) // da falso pq os valores sao iguais, mas os tipos sao diferentes
console.log(num1 != num2) // falso pq so checa somente os valores
console.log(num1 !== num2) // da true pq os valores sao iguais, mas os tipos sao diferentes
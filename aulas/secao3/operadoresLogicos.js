/*
OPERADORES LOGICOS
&& - AND - E
|| -  OR - OU
!  - NOT - NAO
*/

const expressaoAnd = true && true && true && true && true // todas tem q ser verdadeiras para ser true, 1 falsa já da false
console.log(expressaoAnd)

const expressaoOr = true || false || false || false || false // 1 precisa ser true para retornar true
console.log(expressaoOr)

const expressaoNot = true
console.log(!expressaoNot) // negação, troca o valor boolean
console.log(!!expressaoNot) // negação da negação
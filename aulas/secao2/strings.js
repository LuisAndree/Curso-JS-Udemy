// strings são indexadas 
//               01234567
let umaString = 'Um texto'
// buscando elemento de um indice especifico
console.log(umaString[4])
console.log(umaString[8]) // undefined, pois tentou usar um indice q nao existe
console.log(umaString.charAt(6))
//concatenando strings
console.log(umaString.concat(' muito longo'))
console.log(umaString + ' muito longo')
console.log(`${umaString} muito longo`)
//buscando um indice
console.log(umaString.indexOf('x'))
console.log(umaString.indexOf('x', 4)) // busca apartir do indice especificado
console.log(umaString.search('x'))
console.log(umaString.replace('x', 's'))
umaString = 'o rato roeu a roupa do rei de roma'
console.log(umaString.replace(/r/g, '#'))
console.log(umaString.length) // retorna a quantidade de caracteres da string q é a quantidade de indices +1
console.log(umaString.slice(2, 6)) // tem q pegar um indice dps doq vc qr q acabe
console.log(umaString.slice(-2, -1)) // pega o tamanho real da string -2 
console.log(umaString.substring(umaString.length -4, umaString.length -0)) // use slice() da no mesmo e tem menos codigo
console.log(umaString.split(' ', 3)) // divide a string 1 parametro é em qual caractere e o 2° é quantas vezes. o caractere passado por parametro nao é adicionado no retorno
console.log(umaString.toUpperCase()) // tranforma todos os caracteres em maiusculo
console.log(umaString.toLowerCase()) // tranforma todos os caracteres em minusculo


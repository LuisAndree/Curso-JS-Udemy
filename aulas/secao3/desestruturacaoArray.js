let a = 'a'
let b = 'b'
let c = 'c'

//[a, b, c] = [1, 2, 3]

//console.log(a, b, c)

const letras = [b, c, a];
[a, b, c] = letras;
console.log(a, b, c);

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [um, dois, tres, ...resto] = numeros;
console.log(um, dois, tres);
console.log(resto); // ...rest ou ...spread depende do contexto

const [um1, , tres3, , cinco5] = numeros;
console.log(um1, tres3, cinco5);

const matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(matriz[1][2]);

const [,[,,seis]] = matriz;
console.log(seis);
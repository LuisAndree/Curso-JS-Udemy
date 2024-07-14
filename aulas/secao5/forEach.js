// sintax array.forEach(callback(currentValue [, index [, array]])[, thisArg]);
// O método forEach() executa uma dada função em cada elemento de um array.

const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

a1.forEach(function (valor, indice, array) {
    console.log(valor)
})

//simulacao de reduce
let total = 0;
a1.forEach(valor => total += valor)
console.log(total)

// copia de um objeto

function copy(o) {
    var copy = Object.create(Object.getPrototypeOf(o));
    var propNames = Object.getOwnPropertyNames(o);

    propNames.forEach(function (name) {
        var desc = Object.getOwnPropertyDescriptor(o, name);
        Object.defineProperty(copy, name, desc);
    });

    return copy;
}

var o1 = { a: 1, b: 2 };
var o2 = copy(o1); 
console.log('original', o1)
console.log('copia', o2)

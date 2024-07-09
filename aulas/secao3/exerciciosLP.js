function maiorNumero(x, y) {
    if (x > y) {
        return x
    }
    if (y > x) {
        return y
    } else {
        return 'sao iguais'
    }
}

console.log(maiorNumero(3, 10))

// com arow function

const max = (x, y) => x > y ? x : y
console.log(max(10, 123))

const paisagem = (a, l) => a < l ? 'paisagem' : 'retrato'
console.log(paisagem(1080, 2160))

const fizzBuzz = (n) => {
    if (typeof (n) === 'number') {
        if (n % 3 === 0 && n % 5 === 0) {
            return 'fizzBuzz'
        } else if (n % 5 === 0) {
            return 'buzz'
        } else if (n % 3 === 0) {
            return 'fizz'
        }
        else {
            return n
        }
    }
}

for (i = 0; i <= 100; i++) {
    console.log(fizzBuzz(i))
}




//desacopalndo
const falar = {
    falar() {
        console.log(`${this.nome} Falando eguagem`)
    },
}

const beber = {
    beber() {
        console.log(`${this.nome} Bebendo eguagem`)
    },
}

const comer = {
    comer() {
        console.log(`${this.nome} Comendo eguagem`)
    },
}

function criaPessoa(nome, sobrenome) {
    const pessoaPrototype = Object.assign({}, falar, comer, beber) // compossicao ou mixing
    // const pessoaPrototype = { ...falar, ...beber, ...comer }
    //     falar() {
    //         console.log(`${this.nome} Falando eguagem`)
    //     },
    //     beber() {
    //         console.log(`${this.nome} Bebendo eguagem`)
    //     },
    //     comer() {
    //         console.log(`${this.nome} Comendo eguagem`)
    //     },
    // }

    return Object.create(pessoaPrototype, {
        nome: { value: nome }, sobrenome: { value: sobrenome }
    })
}

const p1 = criaPessoa('Luis', 'André')

console.log(p1)




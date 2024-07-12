//Declaracao de funcao (funcao hoisting)

falaOi()

function falaOi() {
    console.log('fala oi')
}

//Drist-class object 
// function expression
const umDado = function falaOi() {
    console.log('dado')
}
umDado() // agr podemos executar essa constante como uma funcao

function executaFuncao(funcao) { // uma funcao pode receber outras funcoes de paramentro 
    funcao();
}

// Arrow function 
const funcaoArrow = () => {
    console.log('Uma arrow function')
}

executaFuncao(funcaoArrow)

// Dentro de um objeto como metodo 

// const obj = {
//     falar: function falar() {
//         console.log('estou a falar')
//     }
// }

const obj = {
    falar() {
        console.log('estou a falar')
    }
}
obj.falar();
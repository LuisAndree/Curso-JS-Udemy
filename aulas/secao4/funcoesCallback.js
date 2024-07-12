// Uma função callback é uma função passada a outra função como argumento, que é então invocado dentro da função externa para completar algum tipo de rotina ou ação.

function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min
    return Math.floor(num)
}

function f1(callback) {
    setTimeout(function () {
        console.log('f1')
        if (callback) callback()
    }, rand())
}
function f2(callback) {
    setTimeout(function () {
        console.log('f2')
        if (callback) callback()
    }, rand())
}
function f3(callback) {
    setTimeout(function () {
        console.log('f3')
        if (callback) callback()
    }, rand())
}

// f1(function () {
//     f2(function () {
//         f3(function () {
//             console.log('Ola callback hell')
//         })
//     })
// })

f1(f1Callback)
function f1Callback() {
    f2(f2Callback)
}

function f2Callback() {
    f3(f3Callback)
}
function f3Callback() {
    console.log('Ola callback')
}




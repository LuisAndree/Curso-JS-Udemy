import { ValidaCpf } from "./validandoCpfWclass.mjs"


function aleatorio() {
    const min = 100000000
    const max = 999999999
    return String(Math.floor(Math.random() * (max - min) + min))
}

export function geraNovoCpf() {
    const cpfSemDigito = aleatorio()
    const digito1 = ValidaCpf.criaDigito(cpfSemDigito)
    const digito2 = ValidaCpf.criaDigito(cpfSemDigito + digito1)
    const novoCpf = cpfSemDigito + digito1 + digito2
    return novoCpf
}

function mostraCpf() {
    const form = document.querySelector('.form')
    function recebeEventoForm(evento) {
        evento.preventDefault();

        const cpfCheck = geraNovoCpf()

        const resultado = document.querySelector('.cpfGerado')
        resultado.innerHTML = cpfCheck
       
    }

    form.addEventListener('submit', recebeEventoForm)
}

mostraCpf()
function mostraElementos() {
    const resultado = document.querySelector('.container')

    const elementos = [
        { tag: 'p', texto: 'frase 1' },
        { tag: 'div', texto: 'frase 2' },
        { tag: 'footer', texto: 'frase 3' },
        { tag: 'section', texto: 'frase 4' }
    ]

    for (i = 0; i < elementos.length; i++) {
        let { tag, texto} = elementos[i]
        resultado.innerHTML += `<${tag}> ${texto} </${tag}>`
    }
}

mostraElementos()

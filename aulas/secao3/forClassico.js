
for (i = 0; i <= 5; i++) {
    console.log(i)
}

const arrayMatriz = [[1, 2, 3, 0], [4, 5, 6, 0], [7, 8, 9, 0]]
for (i = 0; i < arrayMatriz.length; i++) {
    for (j = 0; j < arrayMatriz[i].length; j++) {
        console.log(arrayMatriz[i][j])
    }
}

const elementos = [
    { tag: 'p', texto: 'frase 1' },
    { tag: 'div', texto: 'frase 2' },
    { tag: 'footer', texto: 'frase 3' },
    { tag: 'section', texto: 'frase 4' }
]

for (i = 0; i < elementos.length; i++) { // usando desestruturação de arrays e objetos
    let {tag, texto} = elementos[i];
    console.log(tag, texto)
}





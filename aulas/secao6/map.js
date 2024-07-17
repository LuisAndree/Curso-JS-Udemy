const pessoas = [
    { id: 3, nome: 'Luis' },
    { id: 2, nome: 'Leticia' },
    { id: 1, nome: 'Maria' }
]

const novasPessoas = new Map()

for (const pessoa of pessoas) {
    const { id } = pessoa
    novasPessoas.set(id, { ...pessoa })
}

for (const [indentifier, { id, nome }] of novasPessoas) {
    console.log(indentifier, id, nome)
}
console.log(novasPessoas)

console.log(novasPessoas.get(2))

novasPessoas.delete(2)

console.log(novasPessoas)


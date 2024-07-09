try {
    console.log('abrindo arquivos')
    console.log('manipulando arquivos')
    console.log('fechando arquivos')

} catch (eror) {
    console.log('Deu erro')
} finally {
    console.log('Eu sempre vou ser executado')
}

retornaData = (data) => {
    if (data && !(data instanceof Date)) {
        throw TypeError('esperando instancia de Date')
    }
    if (!data) {
        data = new Date
    }
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })
}
try {
    console.log(retornaData(new Date())) // se botar outra coisa diferente de um objeto Date vai da erro
} catch (error) {
    console.log('Deu erro')
} finally {
    console.log('Compreensivel, tenha um bom dia!!!') // sempre vai ser executado
}
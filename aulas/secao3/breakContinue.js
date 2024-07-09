// funciona em todos os laços de repetição

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let n of numeros) {

    if (n === 2) {
        console.log('pulei o 2')
        continue; // o continue vai pular toda a execução de codico do laço abaixo dele e vai para a proxima execução do laço
    }
    console.log(n)

    if (n === 7) {
        console.log('encontrei o 7, nao me importa o resto')
        break; // o break vai para o laço, quando achar a condição verdadeira, so executa o codigo do laço se estiver acima dele 
        console.log(n) // nao vai ser executado
    }
}


let nome = 'luis'
var nome2 = 'andre'

var nome2 = 'tavares' // a 1° diferença é q var pode ser redeclarado, let nao. na redeclaração vai sobrescrever a outra var de msm nome  

if (true) {
    let nome = 'leticia' // let tem escopo de bloco { ...bloco tudo q esta entre chaves} // var tem escopo de função
    var nome2 = 'silva' // redeclarada 
    console.log(nome, nome2)

    if (true) {
        let nome = 'maria'
        var nome2 = 'bebe veia' // redeclarada
        console.log(nome, nome2) // quando chamada uma let, vai verificar em qual bloco foi declarada mais proximo, ate chega no escopo global 
    }

    console.log(nome, nome2) // perceba q a var nome2 tem o valor q foi recebido dentro do bloco, mas ao ser chamada fora do bloco o valor permanece

    function falaOi() {
        var nome3 = 'miranda' 
        console.log(nome3)
    }
    //console.log(nome3) // aqui da erro pq var nome3 tem escopo de função logo vc não consegue acessala fora da função q ela foi declarada 
    falaOi()

    console.log(sobrenome)  // vai executar com var por causa do Hoisting, isso faz a declaração da var no topo do doc, uma elevação mas vai retornar undefined 
    var sobrenome = 'Hoisting'
    // let sobrenome = 'Maria' // com let nem vai rodar pq nao acontece o Hoisting, acontece oq é esperado quando se usa uma variavel antes de declarar ela, da erro

}

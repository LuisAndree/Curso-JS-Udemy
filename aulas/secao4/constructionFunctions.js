// construction functions -> objetos // assim como a factory function
// Sempre devevos iniciar seu nome com letra maiuscula -> criaPessoa(factory function) --- Pessoa(new)
// nao precisamos de , ou ; dentro das constructions functions

function Pessoa(nome, sobrenome, cpf) {
    //podemos criar atributos privados que so estao disponiveis dentro da funcao
    const ID = 123 // atributo privado
    const metodoInterno = function () {  // funcao privada
        if (ID && cpf) {
            return 'cpf validado'
        }
    }

    //atributos publicos (podem ser acessados fora da funcao) this.atributo
    this.cpf = cpf
    this.nome = nome
    this.sobrenome = sobrenome
    // metodo publico (podem ser acessados fora da funcao) this.metodo
    this.metodo = function () {
        if (metodoInterno() == 'cpf validado') {
            console.log(`nome: ${this.nome} ${this.sobrenome} \ncpf: ${cpf}`)
        }

    }
}

const p1 = new Pessoa('Luis', 'Andre', 61149074345) // a palavra new cria um novo objeto vazio, faz o this apontar para esse 
const p2 = new Pessoa('Maria', 'Marta')//objeto que ta sendo ultilizado e retorna o objeto para a variavel sem precisar de return 

p1.metodo()
console.log(p2.nome + ' ' + p2.sobrenome)


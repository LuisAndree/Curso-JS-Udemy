// Closures são um dos recursos mais poderosos de JavaScript. JavaScript permite o aninhamento de funções e garante acesso completo à função interna a 
// todas as variáveis e funções definidas dentro da função externa (e todas as outras variáveis e funções que a função externa tem acesso). No entanto, a 
// função externa não tem acesso às variáveis e funções definidas dentro da função interna. Isto proporciona uma espécie de segurança para as variáveis da 
// função interna. Além disso, uma vez que a função interna tem acesso ao escopo da função externa, as variáveis e funções definidas na função externa vão 
// durar na memória mais do que a própria função externa, isto se a função interna permanecer na memória mais tempo do que a função externa. Uma closure é 
// criada quando a função interna é de alguma forma disponibilizada para qualquer escopo fora da função externa.

console.log('###################')
const nome = 'Luis'

function retornaFuncao() {
    return function () {
        return console.log('nome')
    }
}

const funcao = retornaFuncao()
console.log(funcao)

console.log('###################')
var pet = function (nome) {
    console.log(nome)
    // A função externa define uma variável "nome"
    var getNome = function () {
        console.log(nome)
      return nome; // A função interna tem acesso à variável "nome"  da função externa
    };

    return getNome; // Retorna a função interna, expondo-a assim para escopos externos
  },
  myPet = pet("Vivie");

console.log(myPet()); // Retorna "Vivie"

console.log('###################')

var criarPet = function (nome) {
    var sex;
  
    return {
      setNome: function (newNome) {
        nome = newNome;
      },
  
      getNome: function () {
        return nome;
      },
  
      getSex: function () {
        return sex;
      },
  
      setSex: function (newSex) {
        if (
          typeof newSex == "string" &&
          (newSex.toLowerCase() == "macho" || newSex.toLowerCase() == "fêmea")
        ) {
          sex = newSex;
        }
      },
    };
  };
  
  var pet = criarPet("Vivie");
  pet.getNome(); // Vivie
  
  pet.setNome("Oliver");
  pet.setSex("macho");
  pet.getSex(); // macho
  pet.getNome(); // Oliver

//   Nos códigos acima, a variável nome da função externa é acessível para as funções internas, e não há nenhuma outra maneira para acessar as variáveis internas, 
//   exceto pelas funções internas. As variáveis internas da função interna atuam como armazenamento seguro para as funções internas. Elas armazenam "persistentes",
//    mas seguros, os dados com os quais as funções internas irão trabalhar. As funções não tem que ser atribuídas a uma variável, ou ter um nome.


console.log('###################')

var createPet = function (nome) {
    // Função externa define uma variável chamada "nome"
    return {
      setNome: function (nome) {
        // Função fechada define uma variável chamada "nome"
        nome = nome; // ??? Como podemos acessar o "nome" definido pela função externa ???
      },
    };
  };

//   Há, no entanto, uma série de armadilhas que se deve ter cuidado ao usar closures. Se uma função fechada define uma variável com o mesmo nome de uma variável em um escopo 
//   externo, não há nenhuma maneira de se referir para a variável em um escopo externo novamente.
// A palavra reservada this é muito complicada em closures, elas têm de ser usadas com muito cuidado. O objeto ao que this se refere depende completamente de onde a função foi chamada,
//  ao invés de onde ela foi definida.


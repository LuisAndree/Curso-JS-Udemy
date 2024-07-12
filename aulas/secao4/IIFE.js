// IIFE - Imediatly Invoked Function Expression
// IIFE (Immediately Invoked Function Expression) é uma função em JavaScript que é executada assim que definida.

// É um Design Pattern também conhecido como Self-Executing Anonymous Function e contém duas partes principais. A primeira é a 
// função anônima cujo escopo léxico é encapsulado entre parênteses. Isso previne o acesso externo às variáveis declaradas na IIFE, 
// bem como evita que estas variáveis locais poluam o escopo global.

// A segunda parte corresponde à criação da expressão (), por meio da qual o interpretador JavaScript avaliará e executará a função.

(function(){
    console.log('IIFE FUNCTION')

}
)(10, 20);

(function () {
    var nome = "Felipe";
  })();
  // A variável nome não é acessível fora do escopo da expressão
  //nome; // gerará o erro "Uncaught ReferenceError: nome is not defined"

  var result = (function () {
    var nome = "Felipe";
    return nome;
  })();
  // Imediatamente gera a saída:
  console.log(result); // "Felipe"
  
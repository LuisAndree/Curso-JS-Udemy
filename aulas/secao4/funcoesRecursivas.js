function recursiva(max) {
    if (max >= 10) return;
    max++
    //console.log(max)
    recursiva(max)
}

recursiva(-10)


function fatorial(n) {
    if (n == 0 || n == 1) return 1;
    else return n * fatorial(n - 1);
}

//console.log(fatorial(3))

function loop(x) {
    if (x >= 10){               // "x >= 10" a condição de parada (equivalente a "!(x < 10)")
        return console.log(x);
    }
     
    loop(x + 1); // chamada recursiva
    return console.log(x)
  }
  
 loop(5)


//  No entanto, alguns algoritmos não podem ser simples laços iterativos. Por exemplo, 
//  conseguir todos os nós da estrutura de uma árvore (por exemplo, o DOM) é mais fácil se feito recursivamente:

function walkTree(node) {
    if (node == null)
      //
      return;
    // faça algo com o nó
    for (var i = 0; i < node.childNodes.length; i++) {
      walkTree(node.childNodes[i]);
    }
  }
  
// Em comparação ao laço da função, cada chamada recursiva realiza outras chamadas recursivas.
// É possível converter qualquer algoritmo recursivo para um não recursivo, mas muitas vezes a lógica é muito mais complexa e exige o uso de pilhas. 
// Na verdade a própria recursão usa pilha: a pilha de função.
// O comportamento da pilha pode ser vista a seguir no exemplo:

function foo(i) {
    if (i < 0) return;
    console.log("begin:" + i);
    foo(i - 1);
    console.log("end:" + i);
  }
  foo(3);
  
  
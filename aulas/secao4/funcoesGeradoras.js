function* geradora1() {
    //bloco de codigo
    yield 1
    //bloco de codigo
    yield 2
    //bloco de codigo
    yield 3
}

function* geradora2() {
    yield* geradora1()
    yield 4
    yield 5
    yield 6
    yield 7
}

const g4 = geradora2()
for(let valor of g4) {
    console.log(valor)
}

console.log('################################')

function* idMaker() {
    var index = 0;
    while (true) yield index++;
  }
  
  var gen = idMaker();
  
  console.log(gen.next().value); // 0
  console.log(gen.next().value); // 1
  console.log(gen.next().value); // 2
  // ...
  
  console.log('################################')

  function* fibonacci() {
    var fn1 = 1;
    var fn2 = 1;
    while (true) {
      var current = fn2;
      fn2 = fn1;
      fn1 = fn1 + current;
      var reset = yield current;
      if (reset) {
        fn1 = 1;
        fn2 = 1;
      }
    }
  }
  
  var sequence = fibonacci();
  console.log(sequence.next().value); // 1
  console.log(sequence.next().value); // 1
  console.log(sequence.next().value); // 2
  console.log(sequence.next().value); // 3
  console.log(sequence.next().value); // 5
  console.log(sequence.next().value); // 8
  console.log(sequence.next().value); // 13
  console.log(sequence.next(true).value); // 1
  console.log(sequence.next().value); // 1
  console.log(sequence.next().value); // 2
  console.log(sequence.next().value); // 3
  
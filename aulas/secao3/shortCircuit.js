/*
&& -> retorna o 1° valor falsy encontrado na expressão e ignora o resto da expressâo
|| -> retorna o 1° valor thuly encontrado na expressão e ignora o resto da expressâo

valores falsy(q são avaliados como falso em js)
false
0
-0
'' "" ``  OBS: 'false', "false" e `false` são valores thruly pois nao sao strings vazias, assim como qualquer um desses valores como "0", "NaN", 'undefined', `null` ...
null / undefined
NaN 

valores thruly(q são avaliados como true)
true
{}
[]
42
"0"
"false"
new Date()
-42
12n
3.14
-3.14
Infinity
-Infinity
*/

let expressaoOr = 0 || -0 || false || '' || "" || `` || null || undefined || NaN || {} // retorna o 1° valor thruly encontrado
console.log(expressaoOr)

expressaoOr = 0 || -0 || false || '' || "" || `` || null || undefined || NaN || // caso todos os valores forem falsy retorna um object {}
console.log(typeof(expressaoOr))

expressaoOr = [] || 0 || -0 || false || '' || "" || `` || null || undefined || NaN 
console.log(expressaoOr)

expressaoOr = 0 || -0 || false || '' || "" || 'false' || `` || null || undefined || NaN || {} // aqui 'false' é um valor thruly pois é uma string não vazia
console.log(expressaoOr)

expressaoOr = 0 || -0 || false || '' || "" || `` || "null" || undefined || NaN || {} // aqui 'null' é um valor thruly pois é uma string não vazia
console.log(expressaoOr)

expressaoOr = 0 || -0 || false || '' || "" || `` || null || `undefined` || NaN || {} // aqui `undefined` é um valor thruly pois é uma string não vazia
console.log(expressaoOr)

let expressaoAnd = 78 && true && [] && {} && '0' && "false" && new Date() && 3.14 && -3.14 && Infinity && -Infinity && undefined  // retorna o 1° valor falsy encontrado
console.log(expressaoAnd)

expressaoAnd = 78 && true && [] && {} && '0' && "false" && new Date() && 3.14 && -3.14 && Infinity && -Infinity  // caso todos forem thruly retorna o ultimo valor checado, neste caso, -Infinity
console.log(expressaoAnd)




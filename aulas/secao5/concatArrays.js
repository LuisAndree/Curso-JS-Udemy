// array.concat(array, arrayLiteral, string...)
const a1 = [1, 2, 3]
const a2 = [4, 5, 6]
const a3 = a1.concat(a2, [7, 8, 9], 'Luis')

console.log('concat() ', a3)

//usando ...rest -> ...spread
const a4 = [1, 2, 3]
const a5 = [4, 5, 6]
const a6 = [...a4, ...a5, ...[7, 8, 9], 'Luis']

console.log('...rest, ...spread ', a6)
import padrao from "./modulo1.mjs";
import { nome as nome2 } from "./modulo1.mjs";
import { sobrenome } from "./modulo1.mjs";
import { Pessoa } from "./modulo1.mjs";


console.log(padrao(nome2, sobrenome))

const p1 = new Pessoa(nome2, sobrenome)

console.log(p1)
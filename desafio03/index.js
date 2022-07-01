/* Código Referente ao desafio 03: Faturamento Diário */

const dadosjson = require('./dados.json');

const valuesjson = dadosjson.map(item => [item.dia, item.valor])

var valorjson = valuesjson.valor
console.log(valorjson)







/* Código Referente ao desafio 04: Faturamento Mensal */

const sp = 67836.43;
const rj = 36678.66;
const mg = 29229.88;
const es = 27165.48;
const outros = 19849.53;

var valorTotal = sp + rj + mg + es + outros;

var porcentagemSp = (sp / valorTotal) * 100;
var porcentagemRj = (rj / valorTotal) * 100;
var porcentagemMg = (mg / valorTotal) * 100;
var porcentagemEs = (es / valorTotal) * 100;
var porcentagemOutros = (outros / valorTotal) * 100;

console.log(`A porcentagem de São Paulo é de: ${porcentagemSp.toFixed(2)}%`);
console.log(`A porcentagem do Rio de Janeiro é de: ${porcentagemRj.toFixed(2)}%`);
console.log(`A porcentagem de Minas Gerais é de: ${porcentagemMg.toFixed(2)}%`);
console.log(`A porcentagem do Espírito Santo é de: ${porcentagemEs.toFixed(2)}%`);
console.log(`A porcentagem dos Outros Estados é de: ${porcentagemOutros.toFixed(2)}%`); 
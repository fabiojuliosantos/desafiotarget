var dadosjson = require('./dados.json');
var arrValor = []
var contaDias = 0;

for (var i = 0; i < dadosjson.length; i++) {
    var num = dadosjson[i].valor
    if (num !== 0) {
        arrValor.push(num);
    }

    var tamArray = arrValor.length
    function media() {
        var i = 0, soma = 0;
        while (i < tamArray) {
            soma = soma + arrValor[i++];

        }
        return soma / tamArray
    }
}

var valorMaximo = Math.max.apply(null, arrValor);
var mediaMensal = media();
var valorMinimo = Math.min.apply(null, arrValor);

for (var i = 0; i < dadosjson.length; i++){
    if (dadosjson[i].valor > mediaMensal){
        parseInt(contaDias = contaDias + 1)
    }
}

console.log(`O menor valor de faturamento foi de R$${valorMinimo.toFixed(2)}`);
console.log(`O maior valor de faturamento foi de: R$${valorMaximo.toFixed(2)}`);
console.log(`Dias que o faturamento foi maior que a média ${contaDias}`);
console.log(`O valor médio de faturamento foi de: R$${mediaMensal.toFixed(2)}`);


/* Código Referente ao desafio 05: Invertendo caracteres de uma string */

function inverteString(stringOriginal) {
    var stringOriginal = 'JavaScript'
    var stringInvertida = ''
    for (var i = stringOriginal.length - 1; i >= 0; i--) {
        stringInvertida += stringOriginal[i]
    }
    return stringInvertida
}

console.log(inverteString())
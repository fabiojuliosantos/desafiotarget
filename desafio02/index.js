/* Desafio sobre a Sequência de Fibonacci*/
var numInicial = 13;
function fibonacci(numInicial) {
    var num1 = 1;
    var num2 = 0;
    var num3 = 0;

    while (true) {
        if (num3 >= numInicial) {
            break;
        } else {
            num3 = num2 + num1;
            num1 = num2;
            num2 = num3;
            console.log(num3)
        }
    }
    if (numInicial != num3) {
        console.log(`O número digitado foi: ${numInicial} e não faz parte da Sequência.`)
    } else {
        console.log(`O número digitado foi: ${numInicial} e faz parte da sequência.`)
    }

}

fibonacci(numInicial)




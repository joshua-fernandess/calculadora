const prompt = require('prompt-sync') ({sigint:true})

let primeiro = parseFloat(prompt('Digite o primeiro número '));
let operador = prompt('Digite a operação desejada (+ - / x %): ');
let segundo = parseFloat(prompt('Digite o segundo número '));
let resultado;

if (isNaN(primeiro) || isNaN(segundo)) {
    throw new Error('Você precisa digitar números válidos!');
}

switch(operador){
    case '+': 
        resultado = primeiro + segundo;
        break;
    case '-':
        resultado = primeiro - segundo;
        break;
    case 'x': 
        resultado = primeiro * segundo;
        break;
    case '/':
        if (segundo === 0){
            throw new Error('Não é permitido divisão por zero!')
        } else {
            resultado = primeiro / segundo;
        }
        break;
    case '%':
        resultado = (primeiro * segundo) / 100;
        break;
    default: 
    console.log('Operação inválida!')
        break;
    }
    

prompt(`O resultado da operação ${primeiro} ${operador} ${segundo} é ${resultado}`)

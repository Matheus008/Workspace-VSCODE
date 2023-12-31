/*Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se o parâmetro numero (o primeiro) está entre o maximo e o 
minimo. Quando o parâmetro inclusivo for true, tenha "entre" como inclusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro não seja
informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não considerando se numero é igual a minimo ou a maximo*/

function estaEntre(minimo, maximo, numero, inclusivo = false) {
    if (inclusivo) return numero >= minimo && numero <= maximo

    return numero > minimo && numero < maximo
}

console.log(estaEntre(10,100,50));
console.log(estaEntre(16,100,160));
console.log(estaEntre(3,150,3));
console.log(estaEntre(3,150,3,true));
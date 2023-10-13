/*Crie uma função que recebe um array de números e retorne o segundo maior número presente neste array*/

function segundoMaior(numeros) {
    let indiceDoMaior = 0
    let segundoMaior
    numeros.forEach((numero, indice) => {
        if (numero > numeros[indiceDoMaior])
            indiceDoMaior = indice
    })
    numeros.splice(indiceDoMaior, 1)
    segundoMaior = numeros[0]
    numeros.forEach(numero => {
        if (numero > segundoMaior)
            segundoMaior = numero
    })
    return segundoMaior
}





/*
function segundoMaior(numeros) {
const maiorNumero = Math.max(...numeros)
numeros = numeros.filter(numero => numero != maiorNumero)
const segundoMaior = Math.max(...numeros)
return segundoMaior
}

function segundoMaior(numeros) {
const numerosOrdenados = numeros.sort((numeroA, numeroB) => numeroB - numeroA)
const segundoMaior = numerosOrdenados[1]
return segundoMaior
}
*/
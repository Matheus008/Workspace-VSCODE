/*Quando temos um objeto e manipulamos seus atributos, adicionando, atualizando ou removendo-os, estamos apenas modificando-o, mas, em essência, o objeto continua
o mesmo, ou sejam sua referência de memória é a mesma. 
Num projeto que você está trabalhando, você foi designado a refatorar diversas funções para que façam cópias de objetos e manipulem os dados dessas cópias, com o 
intuito de evitar efeitos indesejáveis em algumas situações devido a refêrencia a objetos.Abaixo, está a descrição de uma dessas funções.
Você escreverá uma função que recebe um objeto como primeiro parâmetroe, como segundo parâmetro, o nome de uma propriedade contida nesse objeto.Em seguida, retorne
uma cópia sem a propriedade especificada no segundo parâmetro*/

function removerPropriedade(objeto, nomeDaPropriedade) {
    const copia = Object.assign({}, objeto);
    delete copia[nomeDaPropriedade];

    return copia;
}

console.log(removerPropriedade({a: 1, b: 2}, "a"));
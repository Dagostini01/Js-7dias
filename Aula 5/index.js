//Funções Declaradas
function movie(){
    console.log('Matrix')
}
movie()

//Funçoes Expressivas
const carro = function(){
    console.log('Tesla')
}
carro()

//Hoisting - ele automaticamente jogo as funcoes do codigo para cima e inicia as funcoes primeiro, por isso ao chamar uma funcao em qualquer linha do codigo nao da erro, diferente de declarar um variavel

//Argumentos em Funçoes:

function somar(){
    let soma = 0
    for (const i of arguments) {
        soma = soma + i
    }
    console.log(soma)
    console.log(typeof(arguments))
}

somar(1, 2, 3)
console.log('Funcionando...')

let n = 'Pedro'
console.log(n)

// price = 10
// const é imutável
const price = 30
console.log(price)

//Tipos Primitivos
//String:
let itemNome = 'Caneta'
//Inteiro
let itemPreco = 3
//Boolean
let estoque = true
//Undefined
let cor
//Nulo
let itemDesconto = null

//Js é Dinamico, não é estatico
//static = let string nome = 'pedro';
console.log(typeof itemNome)

//Tipos Referências
// - Objetos:
let caneta = {
    nome: 'Caneta',
    preco: '3',
    estoque: true,
    cor: 'azul',
    itemDesconto: false
}
console.log(caneta)
console.log(caneta.preco)

// - Arrays:
let nomes = ['Pedro', 'Marcus', 'Alexandre']
console.log(nomes)
console.log(nomes[1])

// - Funções:
function somar(a, b){
    console.log(a+b)
}
somar(2, 5)

function porcentagem10(preco){
    conta = (price * 10 / 100)
    console.log(conta)
}
porcentagem10(100)
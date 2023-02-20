//Listas:
let amigos = ['Pedro', 'Marcos','Alexandre']
console.log(amigos)
console.log(amigos[2])
amigos[0] = 'Marcia'
console.log(amigos)

//Adicionando valores nas listas:
const numeros = [1, 2, 3, 5 ,6, 7, 9]
numeros.push(10)
console.log(numeros)

numeros.unshift(0)
console.log(numeros)

numeros.splice(4, 0, 4)
console.log(numeros)

//Localizando itens na Lista primitiva
const numeros2 = [5, 8, 9, 2]
console.log(numeros2.indexOf(5))
console.log(numeros2.includes(2))

//Localizando itens na Lista de referencia
const filmes = [
    {id:1, nome: 'Os Incriveis'},
    {id:2, nome: 'Bee Movie'},
    {id:3, nome: 'Fuga das Galinhas'}
]

console.log(filmes.find(function(filme){
    return filme.nome == 'Bee Movie'
})) //find só funciona com uma função dentro dele

//Arrow Function
console.log(filmes.find(filme => filme.nome == 'Bee Movie'))

//Removendo itens de uma Lista:
let n = [1, 2, 3, 4, 5]
console.log(n.pop()) //removeu o ultimo
console.log(n.shift()) //removeu o primeiro
console.log(n.splice(2, 1))//1° = posicao, 2° = itens

//Esvaziar uma array
n.splice(0, n.length)
console.log(n)

//Concatenação de Listas:
let lista = [1, 2, 3, 4, 5]
let lista2 = ['a', 'b', 'c', 'd', 'e']

let all = lista.concat(lista2)
console.log(all)

//Cortando a array e criando uma nova:
let lista3 = all.slice(2, 8)
console.log(lista3)

//Join:
let clientes = ['Andre', 'Jose', 'Mateus']
let clientesjoin = clientes.join('-')
console.log(clientesjoin)

//Revertendo a array:
let cliente = ['Andre', 'Jose', 'Mateus']
console.log(cliente.sort()) //Ordem alfabetica
console.log(cliente.reverse()) //Ordem reversa

//Verificando elemento da lista:
let temperatura = [5, 7, 18, -8, 32]
let positivas = temperatura.every(valor => valor >= 0)
console.log(positivas)

//Filtrando uma lista:
let temperatura2 = [20, 38, -1, 0, 28]
let positivas2 = temperatura2.filter(valor => valor >= 0)
console.log(positivas2)

//Arrow Functions
let somar = (valor1, valor2) => console.log((valor1 + valor2))
somar(3, 5)
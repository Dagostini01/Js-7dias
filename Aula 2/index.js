//Operadores de atribuição
let num1 = 3
num1++ // = 4
num1 -- // = 2

//Operadores de comparação
let num2 = 3
console.log(num2 > 0)
console.log(num2 < 0)
console.log(num2 >= 3)
console.log(num2 <= 3)
console.log(num2 === 3) //true
console.log(num2 === '3') //false
console.log(num2 !== 2) // true

//Operadoresd e igualdade
let num3 = 3
console.log(num3 == '3') //true
console.log(num3 === '3') //false

//Operador ternário
let velocidade = 100
let radar = velocidade > 90 ? 'Multado' : 'OK!'
console.log(radar)

//Operadores lógicos
let idadeMinima = true
let tituloEleitor = true
let podeVotar = idadeMinima && tituloEleitor
console.log(podeVotar)

let idadeMinima2 = true
let tituloEleitor2 = false
let podeVotar2 = idadeMinima2 || tituloEleitor2
console.log(podeVotar)

let podeViajar = !podeVotar
console.log(podeViajar)

//Operador lógico com String
let corCliente = 'branco'
let corEstoque = 'Black'
let corVendida = corCliente || corEstoque

//If Else
let driverSpedd = 80
if (driverSpedd>110){
    console.log("Passou dos limites!")
} else if (driverSpedd >= 40 && driverSpedd <= 110){
    console.log("Dentro da velocidade")
}else console.log("Muito devagar")

//Switch Case
let sigla = 'SP'
switch (sigla){
    case 'SP':
        console.log('São Paulo')
        break
    case 'RJ':
        console.log('Rio de Janeiro')
        break
    case 'MG':
        console.log('Minas Gerais')
        break
    default:
        console.log('Não registrado')
}

//For Loop
for (i = 1; i<=10; i++){
    console.log(i)
}

//While Loop
a = 1
while(i <= 10){
    console.log(i)
    a++
}

//Do While Loop
g = 1
do {
    console.log(g)
    g++
}while(g <= 10)

//For in Loop [PERCORRER OBJETOS]
const carro = {
    modelo: 'BMW',
    ano: 2013
}

for (let i in carro){
    console.log(i, carro[i])
}

//For of Loop [PERCORRER LISTAS]

const cor = ['amarelo', 'azul', 'verde']

for (const i of cor) {
    console.log(i) //print o nome
}

for (const i in cor) {
    console.log(i) //print a posicao
}

//Break
let n = 1

while(n <= 10){
    if(n===8) break
    console.log(n)
    n++
}

//mostrando a qtde de elemento na lista:
let cores = ['amarelo', 'azul', 'roxo', 'branco']
for(i = 1; i<cores.length;i++){
}
console.log(i)


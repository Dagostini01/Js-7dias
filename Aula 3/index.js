//Objetos:
const livro = {

    titulo: 'Titulo',
    autor: 'Autor',
    paginas: 140,
    capitulos: {
        cap1: 'capitulo1',
        cap2: 'capitulo2'
    },
    imprimiLivro: function(){
        console.log('Imprimindo...')
    }

}

//Funcao dentro de um objeto:
livro.imprimiLivro()

//Factory:
// - Objetos agrupados
// - Criação de objetos
function criancaoDeCarro(cor, modelo, ano){
    const carro = {
        cor: cor,
        modelo: modelo,
        ano: ano
    }
    return carro
}

const carro1 = criancaoDeCarro('branco', 'modelo1', 2022)
console.log(carro1)

//Adicionando elemento no objeto específico
carro1.cor = 'amarelo'
console.log(carro1)


//Constructor:
function CraindoAnimal(nome, raca, idade){
    this.nome = nome;
    this.raca = raca;
    this.idade = idade
}

const animal1 = new CraindoAnimal('Fred', 'salsicha', 8)
console.log(animal1)

//Garbage Collector:
// - Apaga a reserva de memória não utilizada

//Built in:
console.log(Math.max(2, 5, 8, 9))
console.log(Math.min(2, 5, 8, 9))
console.log(Math.PI)

//O String
let mensagem = 'Olá, meu nome é Pedro'
console.log(mensagem.startsWith('Olá'))
console.log(mensagem.length)
console.log(mensagem.includes('pedro'))

//Templete Literal
let name = 'Pedro'
let mensagem2 = 'Olá, \nmeu nome é: \nPedro'
let mensagem3 = `Olá, 
meu nome é: 
${name}`

console.log(mensagem2)
console.log(mensagem3)
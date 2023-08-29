// No javascript as funções podem ser atribuidas
// a variáveis como se elas fosse valores
function somar(a, b) {
  return a + b
}

// Repare que não usamos os () ao lado do nome da função,
// porque ao fazer isso estaríamos executando a função
// const operacao = somar

// console.log(operacao(4, 5))


// Para isso, podemos usar as funções anônimas, que
// nada mais são do que funções que não possuem um nome
const subtrair = function (a, b) {
  return a - b
}

console.log(subtrair(36, 13))


let operacao = somar 

operacao = function (a, b) {
  return a - b
}

console.log(operacao(4, 5))


// Com as funções anônimas podemos, por exemplo,
// atribuir uma função a uma chave de objeto
const calculadora = {}
calculadora.somar = somar
calculadora.subtrair = subtrair
calculadora.multiplicar = function (a, b) {
  return a * b
}

console.log(calculadora.multiplicar(3, 7))


// Funções anônimas só podem ser chamadas após a atribuição da variável,
// elas não são jogadas para o topo do arquivo como funções normais
olaMundo()
oiMundo()

function olaMundo() {
  console.log("Olá, mundo!") // Assim como as variáveis criadas com o var, elas já existem quando o arquivo é carregado, já que tanto a function normal como essa e o var sobem para o início do código.
}

const oiMundo = function () {
  console.log("Oi, mundo!") // no caso das funções anonimas como essa, ela só iria funcionar se eu chamasse a função "oiMundo()" depois dessa declaração como const.
}
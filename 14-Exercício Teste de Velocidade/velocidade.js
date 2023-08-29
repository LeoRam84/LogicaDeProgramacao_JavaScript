const nomeVeiculo1 = prompt("Qual a marca do primeiro carro?")
const velocidadeVeiculo1 = prompt("Qual a velocidade do primeiro carro?")
const x = parseFloat(velocidadeVeiculo1)

const nomeVeiculo2 = prompt("Qual a marca do segundo carro?")
const velocidadeVeiculo2 = prompt("Qual a velocidade do segundo carro?")
const y = parseFloat(velocidadeVeiculo2)

if (x > y) {
  alert("O primeiro carro é mais rápido")
} else if (x < y) {
  alert("O segundo carro é mais rápido")
} else if (x === y) {
  alert("Ambos os carros possuem a mesma velocidade")
}
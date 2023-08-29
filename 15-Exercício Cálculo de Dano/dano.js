const nomePersonagem1 = prompt("Qual o nome do primeiro personagem?")
const ataquePersonagem1 = prompt("Qual o poder de ataque do primeiro personagem?")
const x = parseFloat(ataquePersonagem1)

const nomePersonagem2 = prompt("Qual o nome do segundo personagem?")
const vidaPersonagem2 = prompt("Quantos pontos de vida possui o segundo personagem?")
const y = parseFloat(vidaPersonagem2)

const defesaPersonagem2 = prompt("Qual o poder de defesa do segundo personagem?")
const z = parseFloat(defesaPersonagem2)
const escudoPersonagem2 = confirm("O " + nomePersonagem2 + " possui um escudo?")

let danocausado 
let a = parseFloat(danocausado)

let danototal
let b = parseFloat(danototal)

if (x > z && escudoPersonagem2 === false) {
  a = x - z
  b = y - a
  alert(
    "Resultados:\n" +
    "\nDano Causado: " + a +
    "\nDano Total (Vida - Dano Causado): " + b +
    "\nNome Personagem 1: " + nomePersonagem1 +
    "\nAtaque Personagem 1: " + ataquePersonagem1 +
    "\nNome Personagem 2: " + nomePersonagem2 +
    "\nVida Personagem 2: " + y +
    "\nDefesa Personagem 2: " + z +
    "\nEscudo Personagem 2: " + escudoPersonagem2 
  )
} else if (x > z && escudoPersonagem2 === true) {
  a = (x - z) / 2
  b = y - a
  alert(
    "Resultados:\n" +
    "\nDano Causado: " + a +
    "\nDano Total (Vida - Dano Causado): " + b +
    "\nNome Personagem 1: " + nomePersonagem1 +
    "\nAtaque Personagem 1: " + ataquePersonagem1 +
    "\nNome Personagem 2: " + nomePersonagem2 +
    "\nVida Personagem 2: " + y +
    "\nDefesa Personagem 2: " + z +
    "\nEscudo Personagem 2: " + escudoPersonagem2 
  )
} else if (x <= z) {
  a = 0
  b = y - a
  alert(
    "Resultados:\n" +
    "\nDano Causado: " + a +
    "\nDano Total (Vida - Dano Causado): " + b +
    "\nNome Personagem 1: " + nomePersonagem1 +
    "\nAtaque Personagem 1: " + ataquePersonagem1 +
    "\nNome Personagem 2: " + nomePersonagem2 +
    "\nVida Personagem 2: " + y +
    "\nDefesa Personagem 2: " + z +
    "\nEscudo Personagem 2: " + escudoPersonagem2 
  )
}
const atacante = prompt("Qual é o nome do personagem atacante?")
const a = prompt("Qual é o seu poder de ataque?")
const poderDeAtaque = parseFloat(a)

const defensor = prompt("Qual é nome do personagem defensor?")
let v = prompt("Quantos pontos de vida ele possui?")
let pontosDeVida = parseFloat(v)
const d = prompt("Qual é o seu poder de defesa?")
const poderDeDefesa = parseFloat(d)
const possuiEscudo = prompt("Ele possui um escudo? (Sim/Não)")

let c 
let danoCausado = parseFloat(c)

if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Não") {
  danoCausado = poderDeAtaque - poderDeDefesa
} else if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Sim" || "sim") {
  danoCausado = (poderDeAtaque - poderDeDefesa) / 2
} else if (poderDeAtaque <= poderDeDefesa && possuiEscudo === "Sim" || "sim" || "Não") {
  danoCausado = 0
}

pontosDeVida -= danoCausado

alert(atacante + " causou " + danoCausado + " pontos de dano em " + defensor)
alert(
  atacante + "\nPoder de ataque: " + poderDeAtaque + "\n\n" +
  defensor + "\nPontos de vida: " + pontosDeVida +
  "\nPoder de defesa: " + poderDeDefesa + "\nPossui escudo: " + possuiEscudo
)
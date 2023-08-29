const numero = prompt(
  "Olá, eu sou o Robô da tabuada!\n" +
  "Qual número você deseja utilizar para ver sua tabuada de 1 a 20?"
)

let resultado = ""

for (let fator = 1; fator <= 20; fator++) {
  resultado += " -> " + numero + " * " + fator + " = " + (numero * fator) + "\n"
}

alert("Resultado da tabuada de " + numero + ":\n\n" + resultado)
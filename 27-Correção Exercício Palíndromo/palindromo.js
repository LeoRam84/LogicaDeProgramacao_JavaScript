const palavra = prompt("Informe uma palavra:")
let palavraInvertida = ""

// i = índice, ex. macarrão, vai começar pegando a ultima letra "o"
for (let i = palavra.length - 1; i >= 0; i--) {
  palavraInvertida += palavra[i]
}

if (palavra === palavraInvertida) {
  alert(palavra + " é um palíndromo!")
} else {
  alert(
    palavra + " não é um palíndromo!\n\n" +
    palavra + " !== " + palavraInvertida
  )
}
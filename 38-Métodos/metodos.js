let pessoa = {
  nome: "Isaac", // propriedade
  idade: 26, // propriedade
  dizerOla() {
    console.log("Olá, mundo! Meu nome é " + this.nome)
  } // método
}

console.log(pessoa)

// O log é um método do objeto "console", ou seja, uma função.

pessoa.dizerOla()
// dizerOla é uma função/método do objeto pessoa.

// Métodos são funções atreladas a objetos.
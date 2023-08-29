let opcao 

let dinheiro = parseFloat(prompt(
  "Seja bem-vindo(a)\n" +
  "Qual a quantidade de dinheiro disponível?"  
) )

do {
  opcao = prompt(
    "Saldo disponível: R$ " + dinheiro +
    "\nSeja bem-vindo(a)\n" +
    "Qual a opção desejada?"  +
    "\n1 - Adicionar mais dinheiro" +
    "\n2 - Remover dinheiro" +
    "\n3 - Sair" 
  )
  
  switch (opcao) {
    case "1":
      alert("Você selecionou a opção '1 - Adicionar mais dinheiro'")
      let adicionar = parseFloat(prompt(
        "Qual valor você gostaria de adicionar?" 
      ) )
      dinheiro += adicionar
      break
    case "2":
      alert("Você selecionou a opção '2 - Remover dinheiro'")
      let remover = parseFloat(prompt(
        "Qual valor você gostaria de remover?" 
      ) )
      dinheiro -= remover
      break
    case "3":
      alert("Você selecionou a opção '3 - Sair'")
      alert("Saindo...")
      break
    default:
      alert("Opção inválida.")
  }
} while (opcao !== "3")
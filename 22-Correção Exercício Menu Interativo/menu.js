let opcao = ""

do {
  opcao = prompt(
    "Seja bem-vindo(a)\n" +
    "Qual a opção desejada?"  +
    "\n1 - Pagamentos" +
    "\n2 - Transferência" +
    "\n3 - Saldo" +
    "\n4 - Saque" +
    "\n5 - Encerrar" 
  )
  
  switch (opcao) {
    case "1":
      alert("Você selecionou a opção '1 - Pagamentos'")
      break
    case "2":
      alert("Você selecionou a opção '2 - Transferência'")
      break
    case "3":
      alert("Você selecionou a opção '3 - Saldo'")
      break
    case "4":
      alert("Você selecionou a opção '4 - Saque'")
      break
    case "5":
      alert("Você selecionou a opção '5 - Encerrar'")
      alert("Encerrando...")
      break
    default:
      alert("Opção inválida.")
  }
} while (opcao !== "5")
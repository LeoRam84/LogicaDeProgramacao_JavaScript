const metros = prompt("Escolha um valor em metros")

const m = parseFloat(metros)

const unidadeMedida = prompt("Escolha para qual unidade de medida esse valor deve ser convertido:\nmm)\ncm)\ndm)\ndam)\nhm)\nkm)")

let resultado 
let r = parseFloat(resultado)

switch (unidadeMedida) {
  case "mm":
    r = m * 1000
    alert(m + " metros equivale a " + r + " milímetros")
    break
  case "cm":
    r = m * 100
    alert(m + " metros equivale a " + r + " centímetros")
    break
  case "dm":
    r = m * 10
    alert(m + " metros equivale a " + r + " decímetros")
    break
  case "dam":
    r = m / 10
    alert(m + " metros equivale a " + r + " decâmetros")
    break
  case "hm":
    r = m / 100
    alert(m + " metros equivale a " + r + " hectômetros")
    break
  case "km":
    r = m / 1000
    alert(m + " metros equivale a " + r + " quilômetros")
    break
  default:
    alert("Opção inválida !")
}
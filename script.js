const dados = document.querySelector(".dados");
const register = document.querySelector(".register");
const confirm = document.querySelector("#confirm");
const nome = document.querySelector("#name");
const number = document.querySelector("#number");
const dateExp = document.querySelector("#date");
const cvc = document.querySelector("#cvc");

const numberCadastrado = document.querySelector("#numberCadastrado");
const nameCadastrado = document.querySelector("#nameCadastrado");
const dataExpCadastrado = document.querySelector("#dataExpCadastrado");
const cvcCadastrado = document.querySelector("#cvcCadastrado");

function recebe() {
  nameCadastrado.innerHTML = nome.value;
  numberCadastrado.innerHTML = number.value;
  dataExpCadastrado.innerHTML = dateExp.value;
  cvcCadastrado.innerHTML = cvc.value;
}
let cadastroCompleto = false;
function valida() {
  if (nome.value == "") {
    alert("Preencha o campo nome");
  } else if (number.value == "") {
    alert("Preencha o campo number");
  } else if (number.value.length > 20 || number.value[0] == 0) {
    alert("Numero de cartao invalido");
  } else if (number.value.length < 19) {
    alert("Numero de cartao incompleto");
  } else if (dateExp.value == "") {
    alert("Preencha a data de validade do cartao");
  } else if (cvc.value == "") {
    alert("Preencha o campo cvc");
  } else if (cvc.value.length > 3 || cvc.value[0] == 0) {
    alert("cvc de cartao invalido");
  } else if (cvc.value.length < 3) {
    alert("cvc incompleto");
  } else {
    cadastroCompleto = true;
  }
}

confirm.addEventListener("click", (e) => {
  e.preventDefault();
  valida();

  if (cadastroCompleto) {
    dados.classList.add("hidden");
    register.classList.remove("hidden");
    recebe();
  }
});

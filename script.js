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
confirm.addEventListener("click", () => {
  dados.classList.add("hidden");
  register.classList.remove("hidden");
  recebe();
});

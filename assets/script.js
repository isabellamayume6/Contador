let currentNumero = document.getElementById("numeroAtual");
let res = 0;
const butMaior = document.getElementById("maior");
const butMenor = document.getElementById("menor");

function increment() {
  res += 1;
  currentNumero.innerHTML = res;
}
function decrement() {
  if (res <= 0) {
    return alert("Impossivel contar numeros negativos");
  } else {
    res -= 1;
    currentNumero.innerHTML = res;
  }
}
butMaior.addEventListener("click", increment);
butMenor.addEventListener("click", decrement);

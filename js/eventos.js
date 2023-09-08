
const caja1 = document.getElementById("caja1");
console.log(caja1);
caja1.innerText = "<p>Nuevo nombre</p>";
// caja1.innerHTML = "<p>Nuevo nombre</p>";

// Eventos

function saludo() {
  alert("Hola");
}

let cont = 0;
function changeTitle() {
  const titulo = document.querySelector("h1");
  // console.log(titulo);
  cont++;
  titulo.innerText = "Eventos modificado: " + cont;
}

function changeColorOne(event) {
  console.log(event);
  const caja2 = document.querySelector("#caja2");
  caja2.style.backgroundColor = "#5258c4";
}

function changeColorAll() {
  const cajas = document.querySelectorAll("div");
  console.log(cajas);
  for (let index = 0; index < cajas.length; index++) {
    const element = cajas[index];
    element.style.backgroundColor = "#77db41";
  }
}

function changeImage() {
  const img1 = document.querySelector("#img1");
  img1.src = "https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn";
  img1.className = "classImg";
}

const caja4 = document.querySelector("#caja4");
caja4.addEventListener("click", changeImage);
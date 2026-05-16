// GLOW
document.addEventListener("mousemove", e => {
  const glow = document.querySelector(".cursor-glow");
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

// POPUP FAKE
const nomes = ["Carlos", "Ana", "Lucas", "Marcos", "Julia"];

function mostrarPopup() {
  const popup = document.getElementById("popup");
  const nome = nomes[Math.floor(Math.random()*nomes.length)];

  popup.innerText = nome + " acabou de comprar!";
  popup.style.display = "block";

  setTimeout(() => popup.style.display = "none", 3000);
}

setInterval(mostrarPopup, 5000);
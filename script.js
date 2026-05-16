const nomes = ["Rodrigo", "Ana", "Pedro", "Julia"];

function popup() {
  const el = document.getElementById("popup");
  const nome = nomes[Math.floor(Math.random()*nomes.length)];

  el.innerText = nome + " acabou de comprar!";
  el.style.display = "block";

  setTimeout(() => el.style.display = "none", 3000);
}

setInterval(popup, 6000);
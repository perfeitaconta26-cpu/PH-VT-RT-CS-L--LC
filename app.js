document.querySelectorAll("nav button").forEach(btn=>{
btn.onclick=()=>{
document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
document.getElementById(btn.dataset.page).classList.add("active");
}
});

const divinos=[
"Bulbito Bandito Traktorito",
"Burgerini Bearini",
"Martino Gravitino",
"Grappellino D'Oro",
"Elefante de Morango",
"Din Din Vaultero",
"Glacierello Infernetti",
"Explodini Cataclismi",
"Biscotti Macarotti",
"Pastapot Infernetto",
"Galactio Fantasma",
"Rubichetto Cubini",
"Freezeti Cobretti",
"Cupitron Consoletron",
"Draculini Meowlini"
];

const infinity=[
"Noobini Infeeny",
"Anububu",
"Meta Technetta",
"Magmew"
];

divinos.forEach(n=>{
document.getElementById("divinosContainer")
.innerHTML+=`<div class="card">${n}</div>`;
});

infinity.forEach(n=>{
document.getElementById("infinityContainer")
.innerHTML+=`<div class="card rgb-title">${n}</div>`;
});
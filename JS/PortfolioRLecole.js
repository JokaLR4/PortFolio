// Récupération des éléments HTML
var boiteModale = document.getElementById("boite-modale");
var boiteModale2 = document.getElementById("boite-modale2");
var btnOuvrir = document.getElementById("btn-ouvrir");
var btnOuvrir2 = document.getElementById("btn-ouvrir2");
var btnFermer = document.getElementById("btn-fermer");
var btnFermer2 = document.getElementById("btn-fermer2");

// Ajout d'un événement pour ouvrir la boîte modale
btnOuvrir.onclick = function() {
  boiteModale.style.display = "block";
}

btnOuvrir2.onclick = function() {
  boiteModale2.style.display = "block";
}

// Ajout d'un événement pour fermer la boîte modale
btnFermer.onclick = function() {
  boiteModale.style.display = "none";
}

// Ajout d'un événement pour fermer la boîte modale
btnFermer2.onclick = function() {
  boiteModale2.style.display = "none";
}
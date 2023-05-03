// Récupération des éléments HTML
var boiteModale = document.getElementById("boite-modale");
var btnOuvrir = document.getElementById("btn-ouvrir");
var btnFermer = document.getElementById("btn-fermer");

// Ajout d'un événement pour ouvrir la boîte modale
btnOuvrir.onclick = function() {
  boiteModale.style.display = "block";
}

// Ajout d'un événement pour fermer la boîte modale
btnFermer.onclick = function() {
  boiteModale.style.display = "none";
}

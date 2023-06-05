// get elements
let presentation = document.querySelector(".presentation");
let slides = document.querySelectorAll(".slide");
let currentSlide = document.querySelector(".slide.show");

var slideNumber = document.querySelector(".counter");
var toLeftBtn = document.querySelector("#left-btn");
var toRightBtn = document.querySelector("#right-btn");

let presentationController = document.querySelector("#presentation-area");
var toFullScreenBtn = document.querySelector("#full-screen");
var toSmallScreenBtn = document.querySelector("#small-screen");

// initailize defualt values
var screenStatus = 0;
var currentSlideNo = 1;
var totalSides = 0;

// run init script
init();

function init() {
  getCurrentSlideNo();
  totalSides = slides.length;
  setSlideNo();
  hideLeftButton();
  hideRightButton();
}

// handle clicks on left and right icons
toLeftBtn.addEventListener("click", moveToLeftSlide);
toRightBtn.addEventListener("click", moveToRightSlide);

// handle full screen and small screen modes
toFullScreenBtn.addEventListener("click", fullScreenMode);
toSmallScreenBtn.addEventListener("click", smallScreenMode);

// hide left button at first page
function hideLeftButton() {
  if (currentSlideNo == 1) {
    toLeftBtn.classList.remove("show");
  } else {
    toLeftBtn.classList.add("show");
  }
}

// hide right button at last page
function hideRightButton() {
  if (currentSlideNo === totalSides) {
    toRightBtn.classList.remove("show");
  } else {
    toRightBtn.classList.add("show");
  }
}

// moves to left slide
function moveToLeftSlide() {
  var tempSlide = currentSlide;
  currentSlide = currentSlide.previousElementSibling;
  tempSlide.classList.remove("show");
  currentSlide.classList.add("show");

  init();
}

// moves to right slide
function moveToRightSlide() {
  var tempSlide = currentSlide;
  currentSlide = currentSlide.nextElementSibling;
  tempSlide.classList.remove("show");
  currentSlide.classList.add("show");

  init();
}

// get current slide
function getCurrentSlideNo() {
  let counter = 0;

  slides.forEach((slide, i) => {
    counter++;

    if (slide.classList.contains("show")) {
      currentSlideNo = counter;
    }
  });
}

// go full screen
function fullScreenMode() {
  presentationController.classList.add("full-screen");
  toFullScreenBtn.classList.remove("show");
  toSmallScreenBtn.classList.add("show");

  screenStatus = 1;
}

// switch to small screen
function smallScreenMode() {
  presentationController.classList.remove("full-screen");
  toFullScreenBtn.classList.add("show");
  toSmallScreenBtn.classList.remove("show");

  screenStatus = 0;
}

// update counter
function setSlideNo() {
  slideNumber.innerText = `${currentSlideNo} of ${totalSides}`;
}


// Récupération des éléments HTML
var boiteModale = document.getElementById("boite-modale");
var boiteModale2 = document.getElementById("boite-modale2");
var boiteModale3 = document.getElementById("boite-modale3");
var boiteModale4 = document.getElementById("boite-modale4");
var btnOuvrir = document.getElementById("btn-ouvrir");
var btnOuvrir2 = document.getElementById("btn-ouvrir2");
var btnOuvrir3 = document.getElementById("btn-ouvrir3");
var btnOuvrir4 = document.getElementById("btn-ouvrir4");
var btnFermer = document.getElementById("btn-fermer");
var btnFermer2 = document.getElementById("btn-fermer2");
var btnFermer3 = document.getElementById("btn-fermer3");
var btnFermer4 = document.getElementById("btn-fermer4");

// Ajout d'un événement pour ouvrir la boîte modale
btnOuvrir.onclick = function() {
  boiteModale.style.display = "block";
}

btnOuvrir2.onclick = function() {
  boiteModale2.style.display = "block";
}

btnOuvrir3.onclick = function() {
  boiteModale3.style.display = "block";
}

btnOuvrir4.onclick = function() {
  boiteModale4.style.display = "block";
}

// Ajout d'un événement pour fermer la boîte modale
btnFermer.onclick = function() {
  boiteModale.style.display = "none";
}

// Ajout d'un événement pour fermer la boîte modale
btnFermer2.onclick = function() {
  boiteModale2.style.display = "none";
}

// Ajout d'un événement pour fermer la boîte modale
btnFermer3.onclick = function() {
  boiteModale3.style.display = "none";
}

// Ajout d'un événement pour fermer la boîte modale
btnFermer4.onclick = function() {
  boiteModale4.style.display = "none";
}
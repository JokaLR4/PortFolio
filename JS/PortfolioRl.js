function showContent() {
  document.querySelector('.loadercontainer').classList.add('hidden')
}

setTimeout(showContent, 2000);

const htmlicone = document.getElementById("htmlicone");
const flipCardInner = document.querySelector(".flip-card-inner");

if (htmlicone && flipCardInner) {
  htmlicone.addEventListener("click", function () {
    flipCardInner.classList.toggle("flipped");
  });
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // récupérer les valeurs du formulaire
  var name = document.getElementById('name-input').value;
  var email = document.getElementById('email-input').value;
  var message = document.getElementById('message-input').value; 

});
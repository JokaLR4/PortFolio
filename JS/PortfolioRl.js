function showContent() {
  document.querySelector('.loadercontainer').classList.add('hidden')
}

setTimeout(showContent, 1000);

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // récupérer les valeurs du formulaire
  var name = document.getElementById('name-input').value;
  var email = document.getElementById('email-input').value;
  var message = document.getElementById('message-input').value; 

});

// Récupérer tous les liens qui pointent vers des sections de la page
const links = document.querySelectorAll('a[href^="#"]');

// Ajouter un événement click à chaque lien
links.forEach(link => {
  link.addEventListener('click', e => {
    // Empêcher le comportement par défaut du lien
    e.preventDefault();

    // Récupérer l'élément de la page qui correspond à l'ancre du lien
    const target = document.querySelector(link.getAttribute('href'));

    // Animer le défilement de la page jusqu'à l'élément cible
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

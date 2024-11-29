// Sélectionner l'élément avec la classe 'typed'
const selectTyped = document.querySelector('.typed');

// Si l'élément existe et possède l'attribut 'data-typed-items'
if (selectTyped && selectTyped.getAttribute('data-typed-items')) {
    // Récupérer les chaînes à taper et les séparer par des virgules
    let typed_strings = selectTyped.getAttribute('data-typed-items').split(',');

    // Initialiser l'animation de saisie avec Typed.js
    new Typed('.typed', {
        strings: typed_strings,
        loop: false, // Ne pas boucler l'animation pour une meilleure expérience utilisateur
        typeSpeed: 40,
        backSpeed: 50,
        backDelay: 2000
    });
}

// Vérifier et appliquer le thème au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    // Obtenir le thème sauvegardé par l'utilisateur ou définir 'light' par défaut
    const currentTheme = localStorage.getItem('theme') || 'light';

    // Appliquer le thème actuel au document
    document.documentElement.setAttribute('data-theme', currentTheme);

    // Régler l'état du commutateur de thème en fonction du thème actuel
    const themeSwitch = document.querySelector('.checkbox');
    if (themeSwitch) {
        themeSwitch.checked = currentTheme === 'dark';
    }
});

// Fonction pour changer le thème
function switchTheme(event) {
    // Déterminer le nouveau thème en fonction de l'état du commutateur
    const newTheme = event.target.checked ? 'dark' : 'light';

    // Appliquer le nouveau thème au document
    document.documentElement.setAttribute('data-theme', newTheme);

    // Sauvegarder le nouveau thème dans le stockage local
    localStorage.setItem('theme', newTheme);
}

// Ajouter un écouteur d'événement au commutateur de thème
const themeSwitch = document.querySelector('.checkbox');
if (themeSwitch) {
    themeSwitch.addEventListener('change', switchTheme);
}

//Bouton telechargeur de mon CV
document.getElementById('download-cv').addEventListener('click', function() {
    //S'ouvre dans une autre page
    window.open('assets/ZHAIRI_Mohammed_CV_2.pdf', '_blank');        
    
    });


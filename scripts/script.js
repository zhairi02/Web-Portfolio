// Sélectionne l'élément avec la classe 'typed'
const selectTyped = document.querySelector('.typed');

// Si l'élément existe et possède l'attribut 'data-typed-items'
if (selectTyped && selectTyped.getAttribute('data-typed-items')) {
    // Récupérer les chaînes à taper
    let typed_strings = selectTyped.getAttribute('data-typed-items').split(',');

    // Initialiser l'animation de saisie avec Typed.js
    new Typed('.typed', {
        strings: typed_strings,
        loop: false, // Ne pas boucler l'animation pour une meilleure expérience utilisateur
        typeSpeed: 30,
        backSpeed: 50,
        backDelay: 2000
    });
}

// Vérifier et appliquer le thème au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    // Obtenir le thème sauvegardé par l'utilisateur/définir 'light' par défaut
    const currentTheme = localStorage.getItem('theme') || 'light';

    document.documentElement.setAttribute('data-theme', currentTheme);

    // Régler l'état du thème
    const themeSwitch = document.querySelector('.checkbox');
    if (themeSwitch) {
        themeSwitch.checked = currentTheme === 'dark';
    }
});

// Fonction pour changer le thème
function switchTheme(event) {
    // Déterminer le nouveau thème
    const newTheme = event.target.checked ? 'dark' : 'light';

    // Appliquer le nouveau thème 
    document.documentElement.setAttribute('data-theme', newTheme);

    // Sauvegarder le nouveau thème dans le stockage local
    localStorage.setItem('theme', newTheme);
}

// Ajouter un écouteur d'événement
const themeSwitch = document.querySelector('.checkbox');
if (themeSwitch) {
    themeSwitch.addEventListener('change', switchTheme);
}

//Bouton telechargeur de mon CV
document.getElementById('download-cv').addEventListener('click', function() {
    //S'ouvre dans une autre page sans telechagrement (Meilleur experience utilisateur)
    window.open('assets/ZHAIRI_Mohammed_CV_2.pdf', '_blank');        
    
    });

// Ajout d'un bg color a la navbar si on quitte la section hero, pour plus de lisibilite
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const heroSection = document.querySelector('.hero');
   
    if (window.scrollY > heroSection.offsetHeight - navbar.offsetHeight) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});



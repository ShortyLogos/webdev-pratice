
// Deux manières différentes de déclarer une expression régulière. La première est plus courte et simple :

// const reg = /[a-z]/gi;

// const reg2 = new RegExp(/[a-z]/,'i '); 

// ----------------------------------------------------

// On déclare une collection d'éléments HTML (on travaille avec le DOM). Le sélecteur choisi ('input') est un sélecteur CSS.
const inputs = document.querySelectorAll('input');

}

// Au lieu de créer une variable pour chaque champ d'entrée dans l'exercice, on crée une variable qui contient un objet.
const patterns = {
    telephone: /^\d{11}$/
};

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => )
})
// On crée un événement JS (eventListener) qui 'écoute' lorsque l'utilisateur tape un symbole dans un champ d'entrée.

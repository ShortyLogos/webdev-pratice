
// Deux manières différentes de déclarer une expression régulière. La première est plus courte et simple :

// const reg = /[a-z]/gi;

// const reg2 = new RegExp(/[a-z]/,'i '); 

// ----------------------------------------------------

// On déclare une collection d'éléments HTML (on travaille avec le DOM). Le sélecteur choisi ('input') est un sélecteur CSS.
const inputs = document.querySelectorAll('input');

// Au lieu de créer une variable pour chaque champ d'entrée dans l'exercice, on crée une variable qui contient un objet.
const patterns = {
    username:/^[a-z\d]{5,12}$/i,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    password:/^[\w@-]{8,20}$/,
    telephone:/^\d{11}$/,
    slug:/^[a-z\d-]{8,20}$/
};

// Validation function.
function validate(field, regex){
    // console.log(regex.test(field.value)); // Cela retournera soit TRUE ou FALSE.

    if (regex.test(field.value)){
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }
}

// On crée un événement JS (eventListener) qui 'écoute' lorsque l'utilisateur tape un symbole dans un champ d'entrée. e = Event
inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        //console.log(e.target.attributes.name.value); // Lorsqu'on tape dans un champ d'entrée, permet de constater dans la console avec quelle RegEx on compare les données entrées.
        validate(e.target, patterns[e.target.attributes.name.value])
    })
})

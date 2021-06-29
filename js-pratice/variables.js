// function declaration
function greet() {
    console.log('hello there');
}

// calling function
greet();

// function expression = assigner une fonction à une variable. On ne donne pas de nom à la fonction, car elle prend le nom de la variable. À chaque fois qu'on assigne quelque chose à une variable, on parle d'expression. Ici ''function expression''. Ne pas oublier : à la fin de chaque expression, on met un semi-colon '; '. C'est un rare cas où on met un ';' suite à un block de code { }

const speak = function() {
    console.log('good day!');
};

// To call the function stored in a variable, it is the same thing as before, but we call the variable (that stores the function).

speak();

// --- Exercice avec le bouton de la page HTML ----

const pressMe = document.querySelector('button');

pressMe.onclick = function() {
    let userName = prompt('What is your name?');
    alert('Hello ' + userName + ', nice to see you!');
}





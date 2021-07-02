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

// Ce sont là les deux façons de créer une fonction dans JS. GROSSE DIFFÉRENCE ENTRE LES DEUXS :
// Function DECLARATION est ''hissé (hoisted)'' dans JavaScript. Ça veut dire qu'on peut mettre le code au bas de la page, mais JS le priorise comme si elle était au début. Ce n'est PAS le cas avec une Function EXPRESSION (storer une fonction dans une variable).
// Généralement, pour un code plus clean, on préférera les function expressions et on les mettra au bon endroit.

// ''Passing an argument into a function''. On mettra ça entre les parenthèses de la fonction. Passing an argument to a program/function means setting the value of a parameter of that program/function.
 
const speak2 = function(name, time) {
    console.log(`good ${time} ${name}`);
};

// Ici, ça ne fonctionne pas. Car la variable 'name' a seulement le scope de la fonction. On parle plutôt de function parameter à la place de variable ou encore d'argument (même si techniquement, un argument est lorsqu'on assigne une valeur au paramètre).
// console.log(name); ne fonctionne PAS

// Here, we're passing the value 'mario' to the function, called an ARGUMENT.
speak2('mario', 'morning');

// Si une fonction est invoquée sans 'passer' rien aux paramètres, on peut mettre des default values.

const speak3 = function(name = 'luigi', time = 'night') {
    console.log(`good ${time} ${name}`);
};

speak3();
speak3('wario', 'afternoon');

// Une variable déclarée à l'intérieur d'une fonction ne peut pas être réutilisée plus tard à l'extérieur de la fonction. Elle est stored seulement localement, elle n'est pas enregistrée en mémoire (local scope). Pour remédier à ce problème, on a besoin de 'retourner (return)' la valeur de la variable et l'entreposer dans une autre variable (global scope). Autrement, on ne peut rien foutre avec une valeur qui n'est pas retournée et qui demeure en local scope. Voyons tout ça avec une fonction qui calcule l'aire d'un cercle.

// On pourrait écrire ça de cette façon :
// const calcArea = function(radius) {
//     let area = 3.14 * radius**2;
//     return area;
// };

// Nous ne sommes toutefois pas obligés de déclarer une variable dans le cas présent. Un code plus clean serait :

const calcArea = function(radius) {
    return 3.14 * radius**2;
};

const area = calcArea(5);
console.log(area);
// même si la variable area ici porte le même que la variable area dans la fonction 'calcArea', elles ne sont pas en conflit. Celle de la fonction a un 'local scope' alors que celle qu'on vient de déclarer a un 'global scope'. Les deux n'ont PAS à partager le même nom.

// Arrow function. Nouvelle façon plus courte d'écrire des fonctions. '() =>' au lieu de 'function()'.

const calcArea2 = (radius) => {
    return 3.14 * radius**2;
};

const area2 = calcArea2(5);
console.log('area is:', area2);

// On pourrait écrire la arrow function de manière plus courte encore en faisant deux choses.
// 1. Supprimer les parenthèses autour de radius. Cela fonctionne SEULEMENT lorsqu'on a UN SEUL paramètre. Pas zéro, pas deux, etc.
// 2. Supprimer les brackets {}. Cela permet de retourner directement la valeur sans non plus devoir écrire 'return'. Utile quand on a un code qui tient sur une seule ligne.

const calcArea3 = radius => 3.14 * radius**2;

const area3 = calcArea3(5);
console.log('area is still:', area3);

// Pratise arrow functions
// Transformer une fonction régulière en arrow function

// regular function
const greet2 = function() {
    return 'hello, world';
}

const result2 = greet2();
console.log(result2);

// arrow function
const greet3 = () => 'hello, world';

const result3 = greet3();
console.log(result3);

// More complex. Regular function :
const bill = function(products, tax) {
    let total = 0;
    for(let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total;
};

console.log(bill([10, 15, 30], 0.2));


// More complex. Arrow function. Pas possible de supprimer les parenthèses, car plus d'un paramètre. Pas possible non plus de supprimer les brackets et le mot return parce que le code ne tient pas sur une ligne :
const bill2 = (products, tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total;
};


// Quelle différence entre FUNCTIONS et METHODS ?
// A method is just a function. On les distingue par la manière de les invoquer et comment elles sont définies. Une méthode, qui est une fonction fondamentalement, est associée à des objets et des types de données (tels que string).

// functions
const greet4 = () => 'hello';

let resultOne = greet4();
console.log(resultOne);

// methods - invoquées par la dot notation (.)
const name = 'Harry';

let resultTwo = name.toUpperCase();
console.log(resultTwo);


// callbacks functions & foreach
// Jusqu'à maintenant, on a passé des strings et des numbers comme paramètres dans les fonctions. Il est possible de passer des fonctions comme paramètres d'autres fonctions. C'est ce qu'on appelle une callback function...

const myFunc = (callbackFunc) => {
    // do something
    let value = 50;
    callbackFunc(value);
};

// Normalement, pour appeler la fonction, on ferait :
// myFunct();

// Ici, on passe une fonction régulière (function keyword) comme argument de la fonction :
// myFunc(function(value) {
//     // do something
//     console.log(value);
// });

// On préférera utiliser une arrow function cependant :
myFunc(value => {
    console.log(value);
});


// La méthode forEach. On va utiliser une built-on array method. La méthode forEach expect une callback function comme argumnet.

let people = ['mario', 'luigi', 'ryu', 'ken', 'chun-li'];

// Pour chaque propriété dans l'array, .forEach déclenche la callback function
people.forEach(function(person) {
    console.log(person);
});

// Si on veut plutôt utiliser la arrow function :
people.forEach((person, index) => {
    console.log(index, person);
});

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
};

people.forEach(logPerson);

// Faire apparaître chacun des noms dans le document HTML sous forme de liste. On va faire une fonction qui va générer un template HTML pour chacun des noms.

let people2 = ['Luffy', 'Chopper', 'Zoro', 'Sanji', 'Nami'];
const ul = document.querySelector('.people');
let html = ``;

people2.forEach(person => {
    // create HTML template
    html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;






// --- Exercice avec le bouton de la page HTML ----

const pressMe = document.querySelector('button');

pressMe.onclick = function() {
    let userName = prompt('What is your name?');
    alert('Hello ' + userName + ', nice to see you!');
}







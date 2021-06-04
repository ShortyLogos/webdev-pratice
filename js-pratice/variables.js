//// =========== ***VARIABLE DECLARATION*** ========== ////
let message;
message = 'Hello World'; // store the string

alert(message); // shows the variable content

// To be concise, we can combine the variable declaration and assignment into a single line 

let message = 'Hello World !';

alert(message); // Hello World !

// We can also declare multiple variables in one line:
let user = 'John', age = 25, message = 'Hello World !';

// But it is NOT recommended. For the sake of readability, use a single line per variable.

let user = 'John';
let age = 25;
let message = 'Hello World !';

// The multiline style can also be writed like this, and is a matter of preference:

let user = 'John',
    age = 25,
    message = 'Hello World !';

let user = 'John'
    , age = 25
    , message = 'Hello World !';

// As the name implies, the value of a variable can change as many times as we want:

let message;
message = 'Hello World !';
message = 'Goodbye Tim !'; // value changed
alert (message);

// We can also declare two variables and copy data from one into the other.

let hello = 'Hello World !';
let message;
// copy 'Hello World !' from hello into message
message = hello;
// now two variables hold the same data
alert(hello); // Hello World !
alert(message); // Hello World !

// !!! VARIABLES MUST BE DECLARED ONYL ONCE. A repeated declaration of the same variable is an error. So, we declare a variable once and then refer to it without 'let' !!!

let message = "This";
// repeated 'let' leads to an error
let message = "That"; // SyntaxError: 'message' has already been declared

// End of section ----------------------------------------



//// =========== ***VARIABLE NAMING*** ========== ////

// There are two limitations on variable names in JS:
// 1. Name must contain only letters, digits or the symboles '$' and '_'.
// 2. First character must NOT be a digit.
// Valid names:
let userName;
let test123;
let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"
alert($ + _); // 3

// Incorrect names:
let 1a; // cannot start with a digit
let my-name; // hyphens '-' aren't allowed in name

// When the name contains multiple words, camelCase is commonly used. Words go one after another, each word except first starting with a capital letter: myVeryLongName.

// End of section ----------------------------------------



//// =========== ***CONSTANT DECLARATION*** ========== ////

// To declare a constant (unchanging) variable, use 'const' instead of 'let':
const myBirthday = '18.04.1982';

// Variables declared using 'const' are constants. As the name implies, they cannot be reassigned. An attempt to do so would cause an error:
const myBirthday = '18.04.1982';
myBirthday = '01.01.2001'; // error, can't reassign the constant!

// When a programmer is sure that a variable will never change, they can declare it with 'const' to guarantee and clearly communicate that fact to everyone.

// There is a widespread pratice to use constants as aliases for difficult-to-remember values that are known prior to execution. Such constants are named using capital letters and underscores.
// For example, let's make constants for colors in so-called "web" (hexadecimal) format:
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";
// ... when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00
// Benefits : COLOR_ORANGE is much easier to remember, to type and to read than "#FF7F00".

// Capitals for constants should be used only when constants are known prior to execution (lika a hexadecimal value for red). Not for constants that are calculated in run-time, during the execution. For instance:
const pageLoadTime = /* time taken by a webpage to load */;
// The value of pageLoadTime is not known prior to the page load, so it's named normally. But it's still a constant because it desn't change after assignment. In other words, capital-named constants are only used as aliases for "hard-coded" values.

// End of section ----------------------------------------



//// =========== ***NAMING THINGS RIGHT*** ========== ////

// A variable should have a clean, obvious meaning, DESCRIBING THE DATA THAT IS STORES. 

// Variable naming is one of the most important and complex skills in programming. A quick glance at variable names can reveal which code was written by a beginner versus an experienced developer.

// In a real project, most of the time is spend modifying and extending an existing code base rather than writing something completely separate from scratch. When we return to some code after doing something else for a while, it's much easier to find information that is well-labeled. Or, in other words, when the variables have good names.

// Please spend time thinking about the right name for a variable before declaring it. Doing so will repay you handsomely.

// BEST PRATICE : 
/*
+ Use human-readable names like 'userName' or 'shoppingCart'.

+ Stay away from abbreviations or shot names like 'a', 'b', 'c', unless you really know what you're doing.

+ Make names maximally descriptive and concise. Examples of bad names are 'data' and 'value'. Such names say nothing. It's only okay to use them if the context of the code makes it exceptionally obvious which data or value the variable is referencing.

+ Agree on terms within your team and in your own mind. If a site visitor is called a "user" then we should name related variables 'currentUser' and 'newUser' instead of 'currentVisitor' or 'newManInTown'.
*/

// End of section ----------------------------------------



//// =========== ***REUSE OR CREATE ?*** ========== ////

// There are some lazy coders who, instead of declaring new variables, tend to reuse existing ones.

// As a result, their variables are like boxes which people throw different things without changing their stickers. What's inside the box now? Who knows? We need to come closer and check. Such programmers save a little bit on variable declaration but loste TEN TIMES more on debugging.

// An extra variable is good, not evil.

// Modern JavaScript minifiers and browsers optimize code well enough, so it won't create performance issues. Using different variables for different values can even help the engine optimize your code.

// End of section ----------------------------------------



//// =========== ***TASKS*** ========== ////

let admin;
let name = 'John';

admin = name;
alert(admin); // it shows John




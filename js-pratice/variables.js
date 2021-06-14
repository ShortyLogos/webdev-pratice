const pressMe = document.querySelector('button');

pressMe.onclick = function() {
    let userName = prompt('What is your name?');
    alert('Hello ' + userName + ', nice to see you!');
}




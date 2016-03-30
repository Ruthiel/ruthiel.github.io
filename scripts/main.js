var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/ruthiel.JPG');
    } else {
      myImage.setAttribute ('src','images/IMG_2597.JPG');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Por favor, escreva o seu nome.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Bem-vind@ ' + myName + "!!!";
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Bem-vind@ de volta ' + storedName + "!!!";
}

myButton.onclick = function() {
  setUserName();
}

// Image switcher code

var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/snake_with_buns.jpg') {
      myImage.setAttribute ('src','images/snake_with_beans.png');
	} else {
	  myImage.setAttribute ('src','images/snake_with_buns.jpg');
	}
}

// Personalized welcome message code

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt("Who's tryna see snake with buns?");
  localStorage.setItem('name', myName);
  myHeading.innerHTML = "You're a gamer, " + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = "You're a gamer, " + storedName;
}

myButton.onclick = function() {
  setUserName();
}
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/im1223829.jpg') {
      myImage.setAttribute ('src','images/642a7abb.jpg');
    } else {
      myImage.setAttribute ('src','images/im1223829.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Это самый большой город Америки, ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Это самый большой город Америки, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }
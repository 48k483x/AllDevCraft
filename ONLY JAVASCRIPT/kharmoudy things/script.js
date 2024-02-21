var newLink = document.createElement('a');
newLink.id = 'sdz_link';
newLink.href = 'https://facebook.com/';
newLink.title = 'manzakin ';
newLink.setAttribute('tabindex', '10');
console.log(newLink);
document.getElementById('myP').appendChild(newLink);
var newLinkText = document.createTextNode("this your link");
newLink.appendChild(newLinkText); 
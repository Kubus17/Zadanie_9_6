// scripts.js
var list = document.getElementById('list'),
    add = document.getElementById('addElem'),
    li,
    liNumber = 0;
add.addEventListener('click', function () {
    var element = document.createElement('li');
    liNumber = liNumber + 1;
    element.innerHTML = 'item ' + liNumber;
    li = document.getElementsByTagName('li');
    list.appendChild(element);
});
console.log(liNumber);
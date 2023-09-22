const hellos = document.getElementsByClassName('hello')
// const title = document.getElementsByTagName('h1');
const title = document.querySelectorAll('.hello h1');
const firstChild = document.querySelector('.hello h1:first-child');

const findById = document.getElementById("hello");
const findById2 = document.querySelector("#hello");

console.log(hellos)
console.log(title)
console.log(firstChild)
console.log(findById)
console.log(findById2)
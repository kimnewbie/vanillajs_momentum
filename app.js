const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = "hidden"; // string만 포함된 변수는 대문자로 표기

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    greeting.innerText = `Hello  + ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener('submit', onLoginSubmit); 
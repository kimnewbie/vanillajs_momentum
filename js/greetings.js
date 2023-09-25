const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = "hidden"; // string만 포함된 변수는 대문자로 표기
const USERNAME_KEY = "username"

function onLoginSubmit(event) {
    alert('got here!')
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username); // add localStorage 
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const date = new Date();
    const hours = date.getHours();

    if (hours < 12 && hours > 0) {
        greeting.innerText = `Good Morning ${username}`;
    } else if (hours > 12 && hours < 18) {
        greeting.innerText = `Good Afternoon ${username}`;
    } else {
        greeting.innerText = `Good Night ${username}`;
    }
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('keydown', (event) => {
        if (event.keyCode === 13) {
            loginForm.addEventListener('submit', onLoginSubmit);
        }
    });
} else {
    // show the greetings   
    paintGreetings(savedUsername);
}
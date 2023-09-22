const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const toDos = [];
const TODOS_KEY = 'todos'

function saveToDos() {
    // localStorage.setItem(TODOS_KEY, toDos); 이렇게하면 []로 저장이 안돼
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
};

function deleteToDo(event) {
    // event에서 parentNode : li 를 찾을 수 있어
    const li = event.target.parentElement;
    li.remove();
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener('click', deleteToDo);
    li.appendChild(span); // <li><span></span></li>
    li.appendChild(button);
    toDoList.appendChild(li); // todo list 목록
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintTodo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach((item) => console.log(item));
}
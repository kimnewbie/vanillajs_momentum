const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

let toDos = []; // const 로 하면 기능 작동 안함
const TODOS_KEY = 'todos'

function saveToDos() {
    // localStorage.setItem(TODOS_KEY, toDos); 이렇게하면 []로 저장이 안돼
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
};

function deleteToDo(event) {
    // event에서 parentNode : li 를 찾을 수 있어
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id; // 삭제를 위해 id 추가
    const span = document.createElement("span");
    span.innerText = newTodo.todo;
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
    const newTodoObj = {
        todo: newTodo,
        id: Date.now()
    }
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach(paintTodo);
}
const h1 = document.querySelector('div.hello:first-child h1');

function handleTitleClick() {
    h1.style.color = "orange";
}

function handleMouseEnter() {
    h1.innerText = "Mouse is here :)"
}

function handleMouseLeave() {
    h1.innerText = "Mouse is gone :'("
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert('copier!')
}

function handleWindowOfflline() {
    alert('SOS no WIFI')
}

function handleWindowOnlline() {
    alert('ALL GOOD!')
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("onmouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize); // 크기 변경
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOfflline);
window.addEventListener("online", handleWindowOnlline);  
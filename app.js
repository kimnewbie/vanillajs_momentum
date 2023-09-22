const title = document.querySelector('div.hello:first-child h1');


function handleTitleClick() {
    title.style.color = "orange";
}

title.addEventListener("click", handleTitleClick); 
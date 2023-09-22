const clock = document.querySelector("h2#clock");

// 시계가 자릿수 2자리씩으로 정하기
// String() or ().toString()
function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`
}

setInterval(getClock, 1000)
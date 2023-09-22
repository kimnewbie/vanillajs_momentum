const age = prompt("How old are you?"); // 페이지를 멈추게해서 더이상 사용하지 않아

if (isNaN(age)) {
    console.log("Please write a number")
} else {
    console.log("Thank you for writing your age")
}
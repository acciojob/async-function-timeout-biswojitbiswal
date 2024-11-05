//your JS code here. If required.
let inputText = document.getElementById("text");
let inputNum = document.getElementById("delay");
let btn = document.getElementById("btn");
let box = document.getElementById("output");

btn.addEventListener("click", () => {
    setTimeout(() => {
        box.textContent = inputText.value;
    }, inputNum.value);
})
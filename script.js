//your JS code here. If required.
let inputText = document.getElementById("text");
let inputNum = document.getElementById("delay");
let btn = document.getElementById("btn");
let box = document.getElementById("output");

function dealy(delayTime){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, delayTime);
    });
}

btn.addEventListener("click", async() => {
    const text = inputText.value;
    const delayTime = inputNum.value;

    if (!text) {
        box.textContent = "Please enter some text.";
        return;
    }

    if (isNaN(delayTime) || delayTime <= 0) {
        box.textContent = "Please enter a valid delay in milliseconds.";
        return;
    }

    await dealy(delayTime);
    box.textContent = text
})
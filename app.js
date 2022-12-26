// console.log("Hey Browser! Are you lonely as I'm right now? ")

// // input
// let input = prompt("Hey! What is your name? ");
// // processing
// let processing = "Welcome! Nice to meet you " + input;
// // output
// alert(processing);

let btnTranslate = document.querySelector("#btn-translate");
let txtInput = document.querySelector("#txt-input")
console.log(txtInput)
function clickEventHandler() {
    console.log("Clicked!")
    console.log("Input: " + txtInput.value)
}

btnTranslate.addEventListener("click", clickEventHandler); // concept of callback in javascript

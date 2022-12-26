// console.log("Hey Browser! Are you lonely as I'm right now? ")

// // input
// let input = prompt("Hey! What is your name? ");
// // processing
// let processing = "Welcome! Nice to meet you " + input;
// // output
// alert(processing);

let btnTranslate = document.querySelector("#btn-translate");
let txtInput = document.querySelector("#txt-input");
let txtOutput = document.querySelector("#txt-output");

function clickEventHandler() {
    txtOutput.innerText = txtInput.value;
}

btnTranslate.addEventListener("click", clickEventHandler); // concept of callback in javascript


// What will be the query you would write for each one below? Select the first...

// ... textarea tag. document.querySelector("textarea")
// ... element with a class btn-primary. document.queryselector(".btn-primary")
// ... element with an id input-btn. document.querySelector("#input-btn")
// ... input element with an attribute name='translator'. document.querySelector("input[name="translator"]")

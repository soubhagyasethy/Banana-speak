// // input
// var userName = prompt("What is your name? ")

// // processing
// var welcomeMessage = "This sript works! " + userName;

// // output
// alert(welcomeMessage);

var btnTranslate = document.querySelector("#btn-translate");
// Me: Hey browser can you give me that element?
// B: Which element?
// Me: That element which have id selector btn-translate.
// B: Ohh that one, take it.
// Note: We are talking to the browser using the APIs i.e. document. These APIs are in every browser.

btnTranslate.addEventListener("click", clickEventHandler);

function clickEventHandler () {
    console.log("Do not give up! You can do it! ")
}
// Me: Hey brwoser, remember the reference which you gave. Can you like add a click listner to it. 
// B: Ok I can add it, but What do u want me to do when click happens? 
// Me: When click happens can you just console log("") ? 
// B: Ok. Can you write it down in a function? 
// ME: Ok.

// concept of call back: when something happens, do this or that.


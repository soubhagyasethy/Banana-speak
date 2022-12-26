
let btnTranslate = document.querySelector("#btn-translate");
let txtInput = document.querySelector("#txt-input");
let txtOutput = document.querySelector("#txt-output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(input) {
    return serverURL + "?" +"text=" + input
}

function clickEventHandler() {
    let inputTxt = txtInput.value; //taking input

    // calling server for processing
    fetch(getTranslationURL(inputTxt)).then(response => response.json()).then(json => {
        let translatedTxt = json.contents.translated;
        txtOutput.innerText = translatedTxt; //output
    })
}

btnTranslate.addEventListener("click", clickEventHandler);


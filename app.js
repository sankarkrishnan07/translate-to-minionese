var btnTranslate = document.querySelector("#btn-translate");

var input = document.querySelector("#input");

var output = document.querySelector("#output");

function getTranslateURL(inputTxt){
    return "https://api.funtranslations.com/translate/minion.json?text="+inputTxt;
}

function errorHandler(error){
    console.log("Error Occured!",error);
    alert("Something went wrong! Try again after sometime");
}

function clickHandler(){
    var inputTxt = input.value;

    fetch(getTranslateURL(inputTxt))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        output.innerText = translatedText;})
    .catch(errorHandler)
        
}

btnTranslate.addEventListener("click",clickHandler);
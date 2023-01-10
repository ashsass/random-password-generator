const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOneEl = document.getElementById("password-one");
let passwordTwoEl = document.getElementById("password-two");
let passwordLengthEl = document.getElementById("password-length");

//Use this function to get the form input information and apply it to the password output
function getPasswordLength() {

}

function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * characters.length)
    return randomNumber;
}

function renderPassword() {
    let passwordOne = "";
    let passwordTwo = "";
    
    for(let i = 0; i < 15; i++){
        passwordOne += characters[getRandomNumber()];
        passwordTwo += characters[getRandomNumber()];
    }
    passwordOneEl.textContent = passwordOne;
    passwordTwoEl.textContent = passwordTwo;
}
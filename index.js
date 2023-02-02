const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const passwordOneEl = document.getElementById("password-container__one")
const passwordTwoEl = document.getElementById("password-container__two")
const passwordLengthEl = document.getElementById("password-length")
const passwordBtn = document.getElementById("password-button")
const copyPasswordOne = document.getElementById("password-container__one")
const copyPasswordTwo = document.getElementById("password-container__two")
let passwordLength = 0


passwordBtn.addEventListener('click', function() {
    passwordLength = passwordLengthEl.value;
})


//Use the random number function to create a password from randomly chosen array elements in the parameters the user sets on the webpage. 
function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * characters.length)
    return randomNumber;
}

function renderPassword() {
    let passwordOne = "";
    let passwordTwo = "";

    for(let i = 0; i < passwordLength; i++){
        passwordOne += characters[getRandomNumber()];
        passwordTwo += characters[getRandomNumber()];
    }
    passwordOneEl.textContent = passwordOne;
    passwordTwoEl.textContent = passwordTwo;
}

passwordBtn.addEventListener('click', renderPassword);


//Copy-on-click function
function copyOnClick() {
    navigator.clipboard.writeText(passwordOneEl.textContent); //Copy the selected value
    console.log(passwordOneEl.textContent)
}

copyPasswordOne.addEventListener("click", copyOnClick)
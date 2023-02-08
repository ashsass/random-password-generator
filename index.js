const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const passwordOneEl = document.getElementById("password-container__one")
const passwordTwoEl = document.getElementById("password-container__two")
const passwordLengthEl = document.getElementById("password-length")
const passwordBtn = document.getElementById("password-button")
const copyPasswordOne = document.getElementById("password-container__button-one")
const copyPasswordTwo = document.getElementById("password-container__button-two")
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
copyPasswordOne.addEventListener("click", function() {
    navigator.clipboard.writeText(passwordOneEl.textContent); //Copy the selected value
    window.alert("Copied!");
})

copyPasswordTwo.addEventListener("click", function() {
    navigator.clipboard.writeText(passwordTwoEl.textContent); //Copy the selected value
    window.alert("Copied!");
})

//Need to fix the styling of the buttons and the div
//Need to clean up the class/id - having a problem accessing the document eu lement when I use class - probably becuase its an array and I need to specify the number in the array
//change sizing to rem and em    
//Add an error message if someone tries to get a pass word without inputing a length requirement
//Find a more sophisticated way to alert the user when they copy-on-click
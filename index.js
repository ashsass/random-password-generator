const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const passwordOneEl = document.getElementById("password-container__one")
const passwordTwoEl = document.getElementById("password-container__two")
const passwordLengthEl = document.getElementById("password-length")
const passwordBtn = document.getElementById("password-button")
const copyPasswordOne = document.getElementById("password-container__button-one")
const copyPasswordTwo = document.getElementById("password-container__button-two")
const messageBox = document.getElementById("message-box");
let passwordLength = 0


//Use the random number function to create a password from randomly chosen array elements in the parameters the user sets on the webpage. 
function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * characters.length)
    return randomNumber;
}


passwordBtn.addEventListener('click', function() {
    if(passwordLengthEl.value){
        passwordLength = passwordLengthEl.value;
        let passwordOne = "";
        let passwordTwo = "";
    
        for(let i = 0; i < passwordLength; i++){
            passwordOne += characters[getRandomNumber()];
            passwordTwo += characters[getRandomNumber()];
        }
        passwordOneEl.textContent = passwordOne;
        passwordTwoEl.textContent = passwordTwo;
    } else {
        messageBox.style.display = "inline-block";
        messageBox.innerText = "Please enter a password length"
        setTimeout(() => {
            messageBox.style.display = "none";
        }, 1000);
    }   
});


//Copy-on-click function
copyPasswordOne.addEventListener("click", function() {
    navigator.clipboard.writeText(passwordOneEl.textContent); //Copy the selected value
    window.alert("Copied!");
})

copyPasswordTwo.addEventListener("click", function() {
    navigator.clipboard.writeText(passwordTwoEl.textContent); //Copy the selected value
    window.alert("Copied!");
})



//Need help with the layout not moving when the div box appears
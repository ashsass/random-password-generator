const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];


const passwordOneEl = document.getElementById("password-container__one")
const passwordTwoEl = document.getElementById("password-container__two")
const passwordLengthEl = document.getElementById("password-length")
const passwordBtn = document.getElementById("password-button")
const copyPasswordOne = document.getElementById("password-container__button-one")
const copyPasswordTwo = document.getElementById("password-container__button-two")
const messageBox = document.getElementById("message-box");
let passwordLength = 0

//Use the random number function to create a password from randomly chosen array elements in the parameters the user sets on the webpage. 
function getRandomNumber(arr) {
    let randomNumber = Math.floor(Math.random() * arr.length)
    return randomNumber;
}


passwordBtn.addEventListener('click', function() {
    const numbers = document.getElementById("numbers")
    const symbols = document.getElementById("symbols")

    if(passwordLengthEl.value){
        let passwordOne = "";
        let passwordTwo = "";
        passwordLength = passwordLengthEl.value;

        /*If symbols is not checked it will pull from the copied array that exludes symbols*/
        if(!symbols.checked && !numbers.checked){
            const symbolsAndNumbers = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
            const filteredNumbersSymbols = characters.filter((item) => !symbolsAndNumbers.includes(item))
            for(let i = 0; i < passwordLength; i++){
                passwordOne += filteredNumbersSymbols[getRandomNumber(filteredNumbersSymbols)];
                passwordTwo += filteredNumbersSymbols[getRandomNumber(filteredNumbersSymbols)];
            }
            passwordOneEl.textContent = passwordOne;
            passwordTwoEl.textContent = passwordTwo;

        }else if(!symbols.checked){
            const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
            const filteredSymbols = characters.filter((item) => !symbols.includes(item))
            for(let i = 0; i < passwordLength; i++){
                passwordOne += filteredSymbols[getRandomNumber(filteredSymbols)];
                passwordTwo += filteredSymbols[getRandomNumber(filteredSymbols)];
            }
            passwordOneEl.textContent = passwordOne;
            passwordTwoEl.textContent = passwordTwo;

        /*Same idea but with numbers*/
        }else if(!numbers.checked){
            const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
            const filteredNumbers = characters.filter((item) => !numbers.includes(item))
            for(let i = 0; i < passwordLength; i++){
                passwordOne += filteredNumbers[getRandomNumber(filteredNumbers)];
                passwordTwo += filteredNumbers[getRandomNumber(filteredNumbers)];
            }
            passwordOneEl.textContent = passwordOne;
            passwordTwoEl.textContent = passwordTwo;
        
        /*This is the default password option to include all characters in the array*/
        }else {
            for(let i = 0; i < passwordLength; i++){
                passwordOne += characters[getRandomNumber(characters)];
                passwordTwo += characters[getRandomNumber(characters)];
            }
            passwordOneEl.textContent = passwordOne;
            passwordTwoEl.textContent = passwordTwo;
        }
        
    /*Error message for no password length*/ 
    } else {
        messageBox.style.display = "inline-block";
        messageBox.innerText = "Please enter a password length"
        setTimeout(() => {
            messageBox.style.display = "none";
        }, 1500);
    }   
});


//Copy-on-click function
copyPasswordOne.addEventListener("click", function() {
    if(passwordOneEl.textContent){
        navigator.clipboard.writeText(passwordOneEl.textContent);
        const passwordOneHidden = document.getElementById("password-one-hidden")
        passwordOneHidden.style.display = "inline-block"
        passwordOneHidden.innerText = "Copied!"
        setTimeout(function() {
            passwordOneHidden.style.display = "none"
        }, 1500)
    } 
})

copyPasswordTwo.addEventListener("click", function() {
    if(passwordTwoEl.textContent){
        navigator.clipboard.writeText(passwordTwoEl.textContent);
        const passwordTwoHidden = document.getElementById("password-two-hidden")
        passwordTwoHidden.style.display = "inline-block"
        passwordTwoHidden.innerText = "Copied!"
        setTimeout(function() {
            passwordTwoHidden.style.display = "none"
        }, 1500)
    }
    
})



//Need help with the layout not moving when the div box appears (the first one when no password length is given)
//Consolidate the copy on click options - too repetitive 
//Toggle symbols and stuff
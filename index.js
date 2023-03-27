import { characters } from "./characters.js"
const passwordBtn = document.querySelector('.generate-password-button')


passwordBtn.addEventListener('click', renderPassword)

function renderPassword() {
    const passwords = document.querySelectorAll('.password-one, .password-two')

    passwords.forEach(password => {
        password.textContent = '';
    })

    passwords.forEach(password => {
        for(let i = 0; i <= 17; i++){
            password.textContent += renderCharacter()
        }
    })
}



function renderCharacter() {
    let randomNumber = Math.floor(Math.random() * characters.length)
    let randomChar = characters[randomNumber]
    return randomChar
    }







//Replace 16 with the value that is given by the user

/*
passwordBtn.addEventListener('click', function() {

    if(passwordLengthEl.value){
        let passOne = "";
        let passTwo = "";
        passwordLength = passwordLengthEl.value;

        if(!symbols.checked && !numbers.checked){
            const symbolsAndNumbers = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
            const filteredNumbersSymbols = characters.filter((item) => !symbolsAndNumbers.includes(item))
            for(let i = 0; i < passwordLength; i++){
                passOne += filteredNumbersSymbols[getRandomNumber(filteredNumbersSymbols)];
                passTwo += filteredNumbersSymbols[getRandomNumber(filteredNumbersSymbols)];
            }
            passwordOneEl.textContent = passOne;
            passwordTwoEl.textContent = passTwo;

        }else if(!symbols.checked){
            const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
            const filteredSymbols = characters.filter((item) => !symbols.includes(item))
            for(let i = 0; i < passwordLength; i++){
                passOne += filteredSymbols[getRandomNumber(filteredSymbols)];
                passTwo += filteredSymbols[getRandomNumber(filteredSymbols)];
            }
            passwordOneEl.textContent = passOne;
            passwordTwoEl.textContent = passTwo;

    
        }else if(!numbers.checked){
            const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
            const filteredNumbers = characters.filter((item) => !numbers.includes(item))
            for(let i = 0; i < passwordLength; i++){
                passOne += filteredNumbers[getRandomNumber(filteredNumbers)];
                passTwo += filteredNumbers[getRandomNumber(filteredNumbers)];
            }
            passwordOneEl.textContent = passOne;
            passwordTwoEl.textContent = passTwo;
        
        }
});



//Copy-on-click function
copyPasswordOne.addEventListener("click", function(e) {
    copyOnClick(e.target.id)
})

copyPasswordTwo.addEventListener("click", function(e) {
    copyOnClick(e.target.id)
})

function copyOnClick(passwordId) {
    if (passwordId === 'password-two-button'){
        navigator.clipboard.writeText(passwordTwoEl.textContent);
    } else if (passwordId === 'password-one-button'){
        navigator.clipboard.writeText(passwordOneEl.textContent);
    }
}


//Consolidate the copy on click options - too repetitive. Looks better but still needs som ework 
//Toggle symbols and stuff

//change id to one or two so I can use string literals to make this less repetitive
//really need to change the id and class names they are out of control
//the span class for the id is working but i can't get it to display properly
//Use classList to toggle the hidden messages

*/
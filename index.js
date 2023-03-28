import { characters } from "./characters.js"
const passwordBtn = document.querySelector('.generate-password-button')
const symbolCheckbox = document.querySelector('#symbols')
const numbersCheckbox = document.querySelector('#numbers')


//Event Listeners
passwordBtn.addEventListener('click', renderPassword)
document.addEventListener('click', copyOnClick)


//Creating a password by first rendering a random character and then using a loop to create a string for the full password
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
    let randomNumber = array => Math.floor(Math.random() * array.length)
    let randomChar = '';
    const isSymbols = symbolCheckbox.checked
    const isNumbers = numbersCheckbox.checked

    function filterSymbols(){
        const noSymbolsArray = characters.filter(item => {
            if(characters.indexOf(item) >= 0 && characters.indexOf(item) <= 61){
                return item;
            }
        })
        return noSymbolsArray
    }
    
    function filterNumbers(){
        const noNumbersArray = characters.filter(item => {
            if(characters.indexOf(item) <= 51 || characters.indexOf(item) >= 61){
                return item
            }
        })
        return noNumbersArray
    }

    function filterNumbersAndSymbols(){
        const onlyLetters = characters.filter(item => {
            if(characters.indexOf(item) <= 51){
                return item
            }
        })
        return onlyLetters
    }
    

    
    //No numbers or symbols
    if(!isNumbers && !isSymbols){
        console.log('In letters only')
        randomChar = characters[randomNumber(filterNumbersAndSymbols())]
        return randomChar
    }
    //No symbols
    else if(!isSymbols){
        console.log('In no symbols else if')
        randomChar = characters[randomNumber(filterSymbols())]
        return randomChar
    } 
    //No numbers
    else if(!isNumbers){
        console.log('In no numbers else if')
        randomChar = characters[randomNumber(filterNumbers())]
        return randomChar
    }
    //Everything 
    else {
        console.log('in the default')
        randomChar = characters[randomNumber(characters)]
        return randomChar
    }
}


//Copy-on-click
//Want to figure out how to just focus on the password container and not use document for this
function copyOnClick(e){
    const passwordToCopy = document.querySelector(`.${e.target.className}`)
    const copiedMessage = document.querySelector(`.${e.target.className}-copied`)

    navigator.clipboard.writeText(passwordToCopy.textContent)
    copiedMessage.classList.add('show-copied')
    setTimeout(function() {
        copiedMessage.classList.remove('show-copied')
    }, 1500)
}


import { characters } from "./characters.js"
const passwordBtn = document.querySelector('.generate-password-button')
const isSymbols = document.getElementById('symbols').checked 
const isNumbers = document.getElementById('numbers').checked



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
    let randomNumber = Math.floor(Math.random() * characters.length)
    let randomChar = characters[randomNumber]
    return randomChar
}

function filterSymbols(){
    const noSymbolsArray = characters.filter(item => {
        if(characters.indexOf(item) >= 0 && characters.indexOf(item) <= 61){
            return item;
        }
    })
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


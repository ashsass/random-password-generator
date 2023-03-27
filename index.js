import { characters } from "./characters.js"
const passwordBtn = document.querySelector('.generate-password-button')


//Event Listeners
passwordBtn.addEventListener('click', renderPassword)


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



//Copy-on-click
//Want to figure out how to just focus on the password container and not use document for this
document.addEventListener('click', copyOnClick)

function copyOnClick(e){
    const passwordToCopy = document.querySelector(`.${e.target.className}`)
    const copiedMessage = document.querySelector(`.${e.target.className}-copied`)

    navigator.clipboard.writeText(passwordToCopy.textContent)
    copiedMessage.classList.add('show-copied')

    setTimeout(function() {
        copiedMessage.classList.remove('show-copied')
    }, 1500)
}
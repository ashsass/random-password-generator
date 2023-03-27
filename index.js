import { characters } from "./characters.js"
const passwordBtn = document.querySelector('.generate-password-button')
const passwordContainer = document.querySelectorAll('#password-container')


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
document.addEventListener('click', copyOnClick)

function copyOnClick(e){``
    navigator.clipboard.writeText(document.querySelector(`.${e.target.className}`).textContent)
}



/*
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

*/
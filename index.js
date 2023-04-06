import { characters } from "./characters.js"
const passwordBtn = document.querySelector('.generate-password-button')
const symbolCheckbox = document.querySelector('#symbols')
const numbersCheckbox = document.querySelector('#numbers')
const passwordContainer = document.querySelector('.passwords-container')
const toggleBtn = document.getElementById('toggle-button')

const LETTER_CHAR = filterArray(0, 51)
const NUMBER_CHAR = filterArray(52, 61)
const SYMBOL_CHAR = filterArray(62, 90)
const noNumbers = LETTER_CHAR.concat(SYMBOL_CHAR)
const noSymbols = LETTER_CHAR.concat(NUMBER_CHAR)


//Event Listeners
passwordBtn.addEventListener('click', renderPassword)
passwordContainer.addEventListener('click', copyOnClick)
toggleBtn.addEventListener('click', toggleMode) 

//Local Storage
let isLightMode = localStorage.getItem('lightMode') === 'yes' ? true : false
isLightMode && toggleColors()

//Light-dark toggle
function toggleMode() {
    isLightMode = !isLightMode
    localStorage.setItem('lightMode', isLightMode ? 'yes' : 'no') 
    toggleColors()
}

function toggleColors() {
    document.body.classList.toggle('light')
    toggleBtn.classList.toggle('fa-moon')
    toggleBtn.classList.toggle('fa-sun')
}

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
    let randomChar = '';
    const isSymbols = symbolCheckbox.checked
    const isNumbers = numbersCheckbox.checked
    //No numbers or symbols
    if(!isNumbers && !isSymbols){ randomChar = characters[randomNumber(LETTER_CHAR)]}
    //No symbols
    else if(!isSymbols){ randomChar = noSymbols[randomNumber(noSymbols)]} 
    //No numbers
    else if(!isNumbers){ randomChar = noNumbers[randomNumber(noNumbers)]}
    //Everything 
    else { randomChar = characters[randomNumber(characters)]}
    return randomChar
}

function filterArray(low, high) {
    const filteredArray = []
    for(let i = low; i <= high; i++){
        filteredArray.push(characters[i])
    } 
    return filteredArray
}

const randomNumber = array => Math.floor(Math.random() * array.length)


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


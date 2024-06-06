const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklomnopqrstuvwxyz";
const numbers = "1234567890"
const symbols = "!-$^+";
const space = " "

const spacesCheckbox = document.querySelector(".spaces")
const notRepeatsCheckbox = document.querySelector(".none-repeats")
const uppersCheckbox = document.querySelector(".uppers")
const lowersCheckbox = document.querySelector(".lowers")
const specialsCheckbox = document.querySelector(".specials")
const numbersCheckbox = document.querySelector(".numbers")
const generateNode = document.querySelector(".generate")
const passwordInput = document.querySelector(".result")

const length = 12
//function randomizePassword() {
//    
//}

function getRanomChar(chars) {
    const index = Math.floor(Math.random() * chars.length)
    return chars[index]
}

generateNode.addEventListener("click", event => {
    
let characters = ""
if (uppersCheckbox.checked) characters += upperLetters
if (lowersCheckbox.checked) characters += lowerLetters
if (numbersCheckbox.checked) characters += numbers
if (specialsCheckbox.checked) characters += symbols
if (spacesCheckbox.checked) characters += space
    
    let password = ""
    
    while (password.length < length) {
        let char = getRanomChar(characters);
        if (notRepeatsCheckbox.checked && password.includes(char)) continue;
        password += char
    }
    passwordInput.textContent = password;
    })
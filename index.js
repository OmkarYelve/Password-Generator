const passwordOutput = document.getElementById("passwordOutput")
const copyButton = document.getElementById("copyButton")
const generateButton = document.getElementById("generateButton")
const includeUppercaseCheckbox = document.getElementById('includeUppercase');
const includeLowercaseCheckbox = document.getElementById('includeLowercase');
const includeNumbersCheckbox = document.getElementById('includeNumbers');
const includeSymbolsCheckbox = document.getElementById('includeSymbols');
const lengthValueSpan = document.getElementById('lengthValue');
const passwordLengthSlider = document.getElementById('passwordLength');

let upperCaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

let lowerCaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let numberChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


let symbolChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", "\\", ";", ":", "'", "\"", ",", ".", "<", ">", "/", "?", "`", "~"];


passwordLengthSlider.addEventListener('input', () => {
            lengthValueSpan.textContent = passwordLengthSlider.value;
});



generateButton.addEventListener("click", function() {
    const length = parseInt(passwordLengthSlider.value);
    let possibleCharacters = [];
    let generatedPassword  = ''

    if(includeUppercaseCheckbox.checked){
        possibleCharacters = possibleCharacters.concat(upperCaseChars);
    }
    if (includeLowercaseCheckbox.checked) {
        possibleCharacters = possibleCharacters.concat(lowerCaseChars);
    }
    if (includeNumbersCheckbox.checked) {
        possibleCharacters = possibleCharacters.concat(numberChars);
    }
    if (includeSymbolsCheckbox.checked) {
        possibleCharacters = possibleCharacters.concat(symbolChars);
    }
    if (possibleCharacters.length === 0) {
        passwordOutput.value = 'Select at least one option!';
        return;
    }

    for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * possibleCharacters.length);
                generatedPassword += possibleCharacters[randomIndex];
    }
    passwordOutput.value = generatedPassword;
})
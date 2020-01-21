
// Create Const for ID's
const resultEl = document.getElementById("result");
const lengthEL = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const specialEl = document.getElementById("special");
const generateEl = document.getElementById("generate");
const clipboard = document.getElementById("clipboard");

const randomFunction = { 
    lower: getRandomLower, 
    upper: getRandomUpper,
    number: getRandomNumber,
    special: getRandomSpecial
}




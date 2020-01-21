
// Create Const for ID's
const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const specialEl = document.getElementById("special");
const generateEl = document.getElementById("generate");
const clipboard = document.getElementById("clipboard");

const randomFunction = { 
    lower: getRandomLower, 
    upper: getRandomUpper,
    numbers: getRandomNumber,
    special: getRandomSpecial
};

generateEl.addEventListener("click",() => { 
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumbers = numbersEl.checked;
    const hasSpecial = specialEl.checked;

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumbers, hasSpecial, length);
});
//create password button make it work
function generatePassword(lower, upper, numbers, special, length) { 
    let generatedPassword = " ";
    const typesCount = lower + upper + numbers + special; 
    const typesArr = [{lower}, {upper}, {numbers}, {special}].filter
    (
        item => Object.values(item)[0]
    );

        if(typesCount ===0) { 
            return " ";
        }
        for(let i=0; i<length; i+=typesCount) { 
            typesArr.forEach(type => { 
                const functionName = Object.keys(type)[0];
                generatedPassword += randomFunction[functionName]();
            });
        }

        const finalPassword = generatedPassword.slice(0,length);
        return finalPassword;
}
console.log(generatePassword);

// make functions for the checkboxes
function getRandomLower() { 
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}


function getRandomUpper() { 
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() { 
    return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSpecial() { 
    const special = "!@#$%^&*()=[]<>.,/'"
    return special[Math.floor(Math.random() * special.length)];
}
console.log(getRandomSpecial());
// the clipboard icon button to copy password
clipboard.addEventListener("click", () => { 
    const textarea = document.createElement("textarea");
    const password = resultEl.innerText;
    if(!password) { return; }
    textarea.value = password; 
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Copied Password");
});



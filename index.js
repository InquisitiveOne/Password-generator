const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


//specify passwordLength
let pwLength = document.getElementById("pw-length")

// Set a default password length
let passwordLength = 15;

// Update passwordLength when the input value changes
pwLength.addEventListener("input", function () {
  passwordLength = parseInt(pwLength.value) || 0;
});

// on clicking the button, generate two passwords
// each password should be 15 characters long

let passwordOne = document.getElementById("password-one")
let passwordTwo = document.getElementById("password-two")
let button = document.getElementById("generate-pw-btn")
let newPassword = ""

button.addEventListener("click", generatePasswords)


function passwordGenerator() {
    let password = "" // Initialize password as an empty string
    for (i = 0; i < passwordLength; i++) {
        let randomCharacter = Math.floor(Math.random()*characters.length)
        password += characters[randomCharacter]
    }
    
    return password
}

function generatePasswords() {
    passwordOne.textContent = passwordGenerator()
    passwordTwo.textContent = passwordGenerator()
}

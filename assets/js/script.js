// COMMENT: js file for password generator

// COMMENT: Assigns the generateBtn element to the button with the id "generate" in the html document
let generateBtn = document.querySelector("#generate");

// COMMENT: Declares the function writePassword() which calls the function generatePassword() and assigns the generated password's value to the #password id tag in the html document.
function writePassword() {
    let password = generatePassword();
    let passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// COMMENT: Declares the function generatePassword()
function generatePassword() {
    // COMMENT:Defines password character sets.
    let lowercaseSet = "abcdefghijklmnopqrstuvwxyz";
    let uppercaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numericSet = "0123456789";
    let specialSet = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

    // COMMENT:Prompts for criteria. If the minimum criteria isn't met, the prompts will remain in a "while" loop until the criteria is met.
    let passwordLength = prompt(
        "While utilizing the numbers on your keyboard, choose a password length of at least 8 characters and no more than 128 characters."
    );
    while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        passwordLength = prompt(
            "Your input was not a valid number or within the proper range. Please choose a password length of at least 8 and no more than 128 characters."
        );
    }
    let lowercase = confirm("Would you like for your password to include lowercase letters?");
    let uppercase = confirm("Would you like for your password to include uppercase letters?");
    let numeric = confirm("Would you like for your password to include numeric characters?");
    let special = confirm("Would you like for your password to include special characters?");
    while (!lowercase && !uppercase && !numeric && !special) {
        alert("At least one character type must be selected. Please select at least one character type.");
        lowercase = confirm("Would you like for your password to include lowercase letters?");
        let lowercaseMessage;
        if (!lowercase) {
            lowercaseMessage = "You have chosen not to include lowercase letters.";
        } else {
            lowercaseMessage = "You have chosen to include lowercase letters.";
        }
        alert(lowercaseMessage);
        uppercase = confirm("Would you like for your password to include uppercase letters?");
        let uppercaseMessage;
        if (!uppercase) {
            uppercaseMessage = "You have chosen not to include uppercase letters.";
        } else {
            uppercaseMessage = "You have chosen to include uppercase letters.";
        }
        alert(uppercaseMessage);
        numeric = confirm("Would you like for your password to include numeric characters?");
        let numericMessage;
        if (!numeric) {
            numericMessage = "You have chosen not to include numeric characters.";
        } else {
            numericMessage = "You have chosen to include numeric characters.";
        }
        alert(numericMessage);
        special = confirm("Would you like for your password to include special characters?");
        let specialMessage;
        if (!special) {
            specialMessage = "You have chosen not to include special characters.";
        } else {
            specialMessage = "You have chosen to include special characters.";
        }
        alert(specialMessage);
    }
    // COMMENT: Defines a random characterSet based on the criteria chosen by the user and generates a random password, then stores it into a variable called password.
    let characterSet = "";
    if (lowercase) characterSet += lowercaseSet;
    if (uppercase) characterSet += uppercaseSet;
    if (numeric) characterSet += numericSet;
    if (special) characterSet += specialSet;
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        password += characterSet[Math.floor(Math.random() * characterSet.length)];
    }
    return password;
}
// COMMENT:Add an event listener to the #generate button in the html document which starts the function writePassword() when the button is clicked.
generateBtn.addEventListener("click", writePassword);

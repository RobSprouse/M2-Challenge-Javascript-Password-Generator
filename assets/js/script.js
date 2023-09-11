// COMMENT: Assigns the generateBtn element to the button with id "generate" in the html document
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
        "While utilizing the numbers on your keyboard, choose a password length between 8 and 128 characters."
    );
    while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        passwordLength = prompt(
            "Your input was not a valid number. Please input a number between 8 and 128 characters for your desired password length."
        );
    }
    let lowercase = confirm("Would you like for your password to include lowercase letters?");
    let uppercase = confirm("Would you like for your password to include uppercase letters?");
    alert(uppercase);
    let numeric = confirm("Would you like for your password to include numeric characters?");
    alert(numeric);
    let special = confirm("Would you like for your password to include special characters?");
    alert(special);
    while (!lowercase && !uppercase && !numeric && !special) {
        alert("At least one character type must be selected. Please select at least one character type.");
        lowercase = confirm("Would you like for your password to include lowercase letters?");
        let lowercaseMessage
        if (!lowercase) {
            lowercaseMessage = "You have chosen not to include lowercase letters."
        } else {
            lowercaseMessage = "You have chosen to include lowercase letters."
        }
        alert(lowercaseMessage);
        uppercase = confirm("Would you like for your password to include uppercase letters?");
        let uppercaseMessage
        if (!uppercase) {
            uppercaseMessage = "You have chosen not to include uppercase letters."
        } else {
            uppercaseMessage ="You have chosen to include uppercase letters."
        }
        numeric = confirm("Would you like for your password to include numeric characters?");
        let numericMessage;
        if (!numeric) {
            numericMessage = "You have chosen not to include numeric characters."
        } else {
            numericMessage = "You have chosen to include numeric characters."
        }
        special = confirm("Would you like for your password to include special characters?");
        let specialMessage;
        if (!special) {
            specialMessage = "You have chosen not to include special characters."
        } else {
            specialMessage = "You have chosen to include special characters."
        }
    }
    // COMMENT: Defines a random characterSet based on the criteria chsoen by the user and generates a random password, then stores it into a variable called password.
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

// TODO:WHEN I click the button to generate a password THEN I am presented with a series of prompts for password criteria

// TODO: WHEN prompted for password criteria THEN I select which criteria to include in the password

// TODO: WHEN prompted for the length of the password THEN I choose a length of at least 8 characters and no more than 128 characters

// TODO: WHEN asked for character types to include in the password THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

// TODO: WHEN I answer each prompt THEN my input should be validated and at least one character type should be selected

// TODO: WHEN all prompts are answered THEN a password is generated that matches the selected criteria

// TODO: WHEN the password is generatedTHEN the password is either displayed in an alert or written to the page

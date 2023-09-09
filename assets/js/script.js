// COMMENT: Assigns the generateBtn element to the button with id "generate" in the html document
let generateBtn = document.querySelector("#generate");

// COMMENT: Declares the function writePassword()
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// COMMENT: Declares the function generatePassword()
function generatePassword() {

  // COMMENT:Defines character sets.
  let lowercaseSet = "abcdefghijklmnopqrstuvwxyz";
  let uppercaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numericSet = "0123456789";
  let specialSet = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  

  // COMMENT:Prompts
  let passwordLength = prompt("Choose a password length between 8 and 128 characters.");
    if (passwordLength < 8 || passwordLength > 128) {
      alert("You have to choose a password length between 8 and 128 characters!");
      generatePassword();
    }
  let lowercase = confirm("Would you like to include lowercase letters?");
    alert(lowercase);
  let uppercase = confirm("Would you like to include uppercase letters?");
    alert(uppercase);
  let numeric = confirm("Would you like to include numeric characters?");
    alert(numeric);
  let special = confirm("Would you like to include special characters?");
    alert(special);
          
  if (!lowercase && !uppercase && !numeric && !special) {
            alert("You have to confirm at least one character type!");
            generatePassword();
  } 
    else {console.log("passed")
    }
}


// TODO:WHEN I click the button to generate a password THEN I am presented with a series of prompts for password criteria

// TODO: WHEN prompted for password criteria THEN I select which criteria to include in the password

// TODO: WHEN prompted for the length of the password THEN I choose a length of at least 8 characters and no more than 128 characters

// TODO: WHEN asked for character types to include in the password THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

// TODO: WHEN I answer each prompt THEN my input should be validated and at least one character type should be selected

// TODO: WHEN all prompts are answered THEN a password is generated that matches the selected criteria

// TODO: WHEN the password is generatedTHEN the password is either displayed in an alert or written to the page

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
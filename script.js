// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  
  var passlength = prompt("How many characters between 8 and 128 do you want your password to be?"); 
  var capital = confirm("Do you want capital letters?")
  var lower = confirm("Do you want lower-case letters?");
  var numbs = confirm("Do you want to include numbers?");
  var special = confirm("Do you want to include special characters? (ex. #, !. $, %... etc.)");
  
  var passCharacters = ""

  if (lower) {
    passCharacters += "abcdefghijklmnopqrstuvwxyz";
  }
  if (capital) { 
    passCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (numbs) {
    passCharacters += "0123456789"; 
  }
  if (special) { 
    passCharacters += "$%^&*()@!#-_=+/[]{|~`'";
  }

 



}
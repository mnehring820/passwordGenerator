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
  
  do{
    var passLength = prompt("How long should the password be? (8-128 characters)");

    
    if(passLength === null){
      return("Cancelled");
    }

    if(passLength > 128){
      alert("Must be a number 128 or less");
    }

    if(passLength < 8){
      alert("Must be a number 8 or greater");
    }
  
    if(isNaN(passLength) === true){
      alert("Please select a number");
    }
   
    if(Math.floor(passLength) !== Number(passLength)){
      alert("Please choose an integer between 8 and 128");
    }
    
    
  } while (passLength < 8 || passLength > 128 || isNaN(passLength) === true || Math.floor(passLength) !== Number(passLength));





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
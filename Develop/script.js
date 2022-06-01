var numbersOption = ["0","1","2","3","4","5","6","7","8","9"];
var lowerCaseOption = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseOption= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialCharOption = ["$","^","?",":",",","(",")","{","}","[","]","~","-",".","!","@","#","+","//","/","'"];

// 1.) Prompt user to enter passowrd criteria
//   a. password length must be between 8 and 128
//   b. lowercases, uppercases, special characters, and numbers
function generatePassword()
  var passwordLength = prompt("How long would you like you new password to be? 8-128 characters");
    if (passwordLength < 8 || passwordLength > 128){
      alert("Invalid length! Please enter a length between 8 and 128 characters.")
    }
    var uppercases = confirm("Would you like to include uppercases in your new password?");
    var lowercases = confirm("Would you like to include lowercases in your new password?");
    var numbers = confirm("Would you like to include numbers in your new password?");
    var specialchars = confirm("Would you like to include special characters in your new password?");



// 2.) Validate inpute to ensure one charater type is selected 
// 3.) Generate passowrd based on the criterias
// 4.) diplay generated password
  

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

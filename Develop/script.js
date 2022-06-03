var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var lowercases = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercases= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialchars = ["$","^","?",":",",","(",")","{","}","[","]","~","-",".","!","@","#","+",",","/","'"];

// 1.) Prompt user to enter password criteria
//   a. password length must be between 8 and 128
//   b. lowercases, uppercases, special characters, and numbers
function passwordCrit(){
  var passwordLength = prompt("How long would you like your new password to be? 8-128 characters");
    if (passwordLength < 8 || passwordLength > 128){
      alert("Invalid length! Please enter a length between 8 and 128 characters.");
    }
    if (passwordLength >= 8 && passwordLength <= 128){
      var option_uppercases = confirm("Would you like to include uppercases in your new password?");
      var option_lowercases = confirm("Would you like to include lowercases in your new password?");
      var option_numbers = confirm("Would you like to include numbers in your new password?");
      var option_specialchars = confirm("Would you like to include special characters in your new password?");
    }
     // 2.) Validate inpute to ensure one charater type is selected 
     if (option_uppercases != true && option_lowercases != true && option_numbers != true && option_specialchars != true){
      alert("Please select atleast one character type!");
    var option_uppercases = confirm("Would you like to include uppercases in your new password?");
    var option_lowercases = confirm("Would you like to include lowercases in your new password?");
    var option_numbers = confirm("Would you like to include numbers in your new password?");
    var option_specialchars = confirm("Would you like to include special characters in your new password?");
    }
    var passwordSettings = {
      passwordLength: passwordLength,
      option_uppercases: option_uppercases,
      option_lowercases: option_lowercases,
      option_numbers: option_numbers,
      option_specialchars: option_specialchars
    }
}
// 3.) Generate password based on the criterias
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

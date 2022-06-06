var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var lowercases = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercases= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialchars = ["$","^","?",":",",","(",")","{","}","[","]","~","-",".","!","@","#","+",",","/","'"];

// 1.) Prompt user to enter password criteria
//   a. password length must be between 8 and 128
//   b. lowercases, uppercases, special characters, and numbers
function generatePassword(){
  console.log("Hey, you clciked the button!");
  var passwordLength = prompt("How long would you like your new password to be? 8-128 characters");
    if (passwordLength < 8 || passwordLength > 128){
      alert("Invalid length! Please enter a length between 8 and 128 characters.");
      return generatePassword();
    }
      // 2.) Validate inpute to ensure one charater type is selected 
      var option_uppercases = confirm("Would you like to include uppercases in your new password?");
      var option_lowercases = confirm("Would you like to include lowercases in your new password?");
      var option_numbers = confirm("Would you like to include numbers in your new password?");
      var option_specialchars = confirm("Would you like to include special characters in your new password?");
      if (option_uppercases != true && option_lowercases != true && option_numbers != true && option_specialchars != true){
        alert("Please select atleast one character type!");
        return "Please try again.";
      }
      else if (option_uppercases || option_lowercases || option_numbers || option_specialchars ){
        var choices = [];
      if (option_specialchars) {
          choices = choices.concat(specialchars);
      }
      if (option_lowercases) {
          choices = choices.concat(lowercases);
      }
      if (option_uppercases) {
          choices = choices.concat(uppercases);
      }
      if (option_numbers) {
          choices = choices.concat(numbers);
      }
      var passwordgen = "";
      for (i = 0; i < choices.length; i++) {
          passwordgen += choices[i];
      }
  // 3.) Generate password based on the criterias
      var generate = "";
      for (var i = 0; i < passwordLength; i++) {
          generate += passwordgen.charAt(passwordgen.length * Math.random());
      }
      // 4.) diplay generated password
      return generate;
}
}
  

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

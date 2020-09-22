// Assignment Code
var generateBtn = document.querySelector("#generate");
// Function generatePassword generates password based off of specific logic procedures
function generatePassword(){
  // var passwordLength provides a variable that stores how long the user wishes password to be
  var passwordLength = prompt("How many characters would you like your password to contain?")
  // if isNaN corrects user if they enter in a string rather than number
  if (isNaN(passwordLength)){
     alert ("Incorrect imput, please use a number");
  }
  //this else if corrects user if passwordLength is less than 8
  else if (passwordLength<8){
    alert ("Password must be at least 8 characters long");
  }
  //this corrects user if passwordLength is longer than 129
  else if (passwordLength>129) {
    alert ("Password must be less than 129 characters long");
  }
  //this else statement asks for confirmation on special case characters, upper case, lower case, and numbers
  else{
    var ifSpecial = confirm("Click OK to confirm including special case characters");

    var ifUpperCase = confirm("Click OK to confirm including upper case characters");

    var ifLowerCase = confirm("Click OK to confirm including lower case characters");

    var ifNumber = confirm("Click OK to confirm including numbers");

    var passwordChars = "";

    var passwordRand = "";
    // uses ifs and concatenation to build passwordChars with selected imput
    
    // if variable ifSpecial returs true, password will contain special characters
    if (ifSpecial === true){
      passwordChars = "`~!@#$%^&*()_-+={}[]|/?,.<>";
    }
    // if variable ifUpperCase returns true, password will contain upper case characters
    if (ifUpperCase === true){
      passwordChars = passwordChars + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    // if variable ifLowerCase returns true, password will contain lower case characters
    if (ifLowerCase === true){
      passwordChars = passwordChars + "abcdefghijklmnopqrstuvwxyz";
    }
    // if ifNumber returns true, password will contain numbers
    if (ifNumber === true){
      passwordChars = passwordChars + "0123456789";
    }
    // for loop provides randomization of characters per length requirement and specifications of containing upper case, special case, etc. 
    for(var i=1; i<=passwordLength; i++){
      passwordRand = passwordRand +passwordChars.charAt(Math.floor(Math.random()* Math.floor(passwordChars.length-1)));
    }



  return passwordRand;

  }
}
  



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

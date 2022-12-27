// Assignment Code
var generateBtn = document.querySelector("#generate");
var numberOfcharacters;
var okToUseLowercase;
var okToUseUppercase;
var okToUseNumbers;
var okToUseSpecialChars;
var specialChars = ["!","@"];
var numbers = ["1","2"];
var lowerCase = ["a","b",];
var upperCase = ["A","B"];
var passwordArray = [];


function askQuestions(){
  var charLength = prompt("How many characters do you want?");
  numberOfCharacters = parseInt(charLength);
  okToUseLowercase = confirm("Do you want to use lowercase letters?");
  okToUseUppercase = confirm("Do you want to use uppercase letters?");
  okToUseNumbers = confirm("Do you want to use numbers?");
  okToUseSpecialChars = confirm("Do you want to use special characters?");
  
  // if number of characrters no tin range??
// if choices are this or that, use for loop to generate password based on selections
}

function generatePassword(){ 
  let finalPassword = "";
  askQuestions();
  if(okToUseLowercase == true){
    passwordArray = passwordArray.concat(lowerCase);
  }
  if(okToUseUppercase == true){
    passwordArray = passwordArray.concat(upperCase);
  }
  if(okToUseLowercase == true){
    passwordArray = passwordArray.concat(lowerCase);
  }
    

  for (i=0; i<numberOfCharacters; i++) {
    let random = Math.floor(Math.random()*passwordArray.length)
    finalPassword+=passwordArray[random];
  }
  return finalPassword
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

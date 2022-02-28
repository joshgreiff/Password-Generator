// Assignment code here
const lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numericArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
const whichArray = [1, 2, 3, 4];
var useArray = []
var password = ""


 var writePassword = function(){

    charactersAmount();
    lowercaseAsk();
    uppercaseAsk();
    numericAsk();
    specialAsk();
    chooseArray();
    makePassword();

 };
 


var charactersAmount = function(){
  numberCharacters = window.prompt("How many characters would you line your password to be? (Between 8 and 128)");
  if( numberCharacters < 8 || numberCharacters > 128){
    window.alert("Please choose a number between 8 and 128");
    charactersAmount();
  }
  return numberCharacters;
};
numberOfCharacters = charactersAmount();
numberOfCharactersInt = parseInt(numberOfCharacters);
console.log(numberOfCharacters);

var specialCharacters = {
  lowercase: false,
  uppercase: false,
  numeric: false,
  special: false
};

var lowercaseAsk = function(){
  specialCharacters.lowercase = window.confirm("Would you like your password to contain lowercase letters?");
  return specialCharacters.lowercase;
};
lowerCaseYesNo = lowercaseAsk();
console.log(lowerCaseYesNo);

var uppercaseAsk = function(){
  specialCharacters.uppercase = window.confirm("Would you like your password to contain uppercase letters?");
return specialCharacters.uppercase;
};
upperCaseYesNo = uppercaseAsk();
console.log(upperCaseYesNo);

var numericAsk = function(){
  specialCharacters.numeric = window.confirm("Would you like your password to contain numbers?");
return specialCharacters.numeric;
};
numericYesNo = numericAsk();
console.log(numericYesNo);

var specialAsk = function(){
  specialCharacters.special = window.confirm("Would you like your password to contain special characters?");
return specialCharacters.special;
};
specialYesNo = specialAsk();
console.log(specialYesNo);

// var chooseArray = function(){
//     const randomIndex = Math.floor(Math.random() * whichArray.length);

//     const indexNumber = whichArray[randomIndex];

//     return indexNumber;
// }

// arrayChosen = chooseArray();

var makePassword =function(){

    if(lowerCaseYesNo){
        useArray = useArray.concat(lowerArray);
    }

    if(upperCaseYesNo){
        useArray = useArray.concat(upperArray);
    }

    if(numericYesNo){
        useArray = useArray.concat(numericArray);
    }

    if(specialYesNo){
        useArray = useArray.concat(specialArray);
    }


    for(let i = 0; i <= numberOfCharacters-1; i++){
        addedIndex = Math.floor(Math.random() * useArray.length-1);

        useCharacter = useArray[addedIndex];

        password += useCharacter;
    }
    return password;
    };

    donePassword = makePassword();
    console.log(donePassword);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

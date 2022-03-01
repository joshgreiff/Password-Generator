// Assignment code here
const lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numericArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
const whichArray = [1, 2, 3, 4];
var useArray = []
var password = ""


 var writePassword = function(){

    var password = makePassword();
    passwordText.value = password;
    // charactersAmount();
    // lowercaseAsk();
    // uppercaseAsk();
    // numericAsk();
    // specialAsk();
    // // chooseArray();
    // makePassword();

 };
 


var charactersAmount = function(){
  numberCharacters = window.prompt("How many characters would you line your password to be? (Between 8 and 128)");
  if( numberCharacters < 8 || numberCharacters > 128){
    window.alert("Please choose a number between 8 and 128");
    charactersAmount();
  }
  return numberCharacters;
};


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


var uppercaseAsk = function(){
  specialCharacters.uppercase = window.confirm("Would you like your password to contain uppercase letters?");
return specialCharacters.uppercase;
};


var numericAsk = function(){
  specialCharacters.numeric = window.confirm("Would you like your password to contain numbers?");
return specialCharacters.numeric;
};


var specialAsk = function(){
  specialCharacters.special = window.confirm("Would you like your password to contain special characters?");
return specialCharacters.special;
};


// var chooseArray = function(){
//     const randomIndex = Math.floor(Math.random() * whichArray.length);

//     const indexNumber = whichArray[randomIndex];

//     return indexNumber;
// }

// arrayChosen = chooseArray();

var makePassword =function(){
  numberOfCharacters = charactersAmount();
  numberOfCharactersInt = parseInt(numberOfCharacters); 
  console.log(numberOfCharacters);

  lowerCaseYesNo = lowercaseAsk();
  console.log(lowerCaseYesNo);

  upperCaseYesNo = uppercaseAsk();
  console.log(upperCaseYesNo);

  numericYesNo = numericAsk();
  console.log(numericYesNo);

  specialYesNo = specialAsk();
  console.log(specialYesNo);  

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

    // donePassword = makePassword();
    // console.log(donePassword);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

  // var password = makePassword();
  var passwordText = document.querySelector("#password");

  // passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


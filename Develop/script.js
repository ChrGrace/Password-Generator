// Week 3 challenge; random password generator

document.querySelector("#generate").addEventListener("click", writePassword);

function generatePassword() {
  var confirmLength = (prompt(":) Please choose the desired number of characters for your password, within the paramaters of a minimum of 8, and a maximum of 128 characters :) "));

  while (confirmLength <= 7 || confirmLength >= 129) {
    alert("Password length must be a minimum of 8 characters and a maximum of 128 characters. Please try again");
    var confirmLength = (prompt("Please choose the number of characters for your password, between 8-128 characters?"));
  }

  alert(`Your password will have ${confirmLength} characters :D`);

  var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
  var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");
  var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
  var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");

  while (confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
    alert("You must select at least one character type");
    var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
    var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters/numbers");
    var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
    var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");
  }

  var passwordCharacters = []

  if (confirmSpecialCharacter) {
    passwordCharacters = passwordCharacters.concat(specialChar)
  }

  if (confirmNumericCharacter) {
    passwordCharacters = passwordCharacters.concat(numbers)
  }

  if (confirmLowerCase) {
    passwordCharacters = passwordCharacters.concat(lowerCase)
  }

  if (confirmUpperCase) {
    passwordCharacters = passwordCharacters.concat(upperCase)
  }
  //note to self - need to remember to youtube some concat vids to understand this command better

  console.log(passwordCharacters)

  var randomPassword = ""

  for (var i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword)
  }
  return randomPassword;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];
var numbers = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9"
];
var specialChar = [
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '-',
  '_',
  '=',
  '+',
  '[',
  ']',
  '{',
  '}',
  ';',
  ':',
  '<',
  '>',
  '/',
  '?',
];

var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;
// Array of special characters to be included in password
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const charOptions = [];
const generatedPassword = '';
// TODO You can store the generatedPassword as a string and concat each character OR
// TODO as an array and push each character, then join once you have enough characters

// Function to prompt user for password options
function getPasswordOptions() {

  // TODO Prompt for password length
  // TODO At least 8 characters, no more than 128 characters
  // TODO Conditional to check that the number that was entered is in range
  // TODO Prompts store data as strings, so need to parse into a number
  // TODO If the user's input is out of range, either return out of the function or call the function again

  // TODO Once they select a character set:
  // TODO Generate a random character for each selected character set
  // TODO Either push selected character sets to a mega-array of all selected characters
  // TODO OR you can keep the arrays separate and generate a random number to select the array and another to select the index

  // TODO Once character sets are selected, move on to generating random characters

}

// Function for getting a random element from an array
function getRandom(arr) {

  // TODO Need a variable to hold the password as it's being generated
  // TODO Need a variable to hold the index that's being generated

  // TODO For loop that loops the number of times that matches the length the user chose
  // TODO Generate a random number
  // TODO That number is the index for a character in the mega-array
  // TODO So then, mega-array[generated-index] is the actual character
  // TODO Add that character to the password
  // TODO Once we finish the for loop, return the generated password

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
// Array of special characters to be included in password
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Global Variables for Char Options array and Generated Password

var charOptions;
var generatedPassword;

// Global variable for User Password Length

let userPasswordLengthGlobal = '';

// Function to prompt user for password options
function getPasswordOptions() {

  // Reset generated password and back to an empty string and selected options array back to empty if the user restarts the function 

  charOptions = [];
  generatedPassword = '';

  // Clear the console
  console.clear();

  // Prompt for password length

  var userPasswordLengthLocal = prompt(`Let's generate a password. Please input a number between 8 and 128.`);

  // Conditional to confirm that the user input is a number when using the parseInt function. If false, move on to validate function, if true, move on to confirmRange function.

  if (isNaN(parseInt(userPasswordLengthLocal))) {
    validate();

  } else if (!isNaN(parseInt(userPasswordLengthLocal)) && userPasswordLengthLocal >= 8 && userPasswordLengthLocal <= 128) {
    console.log(`User input can be parsed into a number, and is between 8 and 128, so we can proceed.`);
    userPasswordLengthGlobal = parseInt(userPasswordLengthLocal);
    confirmCharacterSets();
  } else if (!isNaN(parseInt(userPasswordLengthLocal)) && userPasswordLengthLocal < 8 || userPasswordLengthLocal > 128) {
    alert('Needs to be between 8 and 128, please try again');
    getPasswordOptions();
  }

  function validate() {

    // Check if a user just presses enter or cancel without typing in a number and restart if true
    if (!userPasswordLengthLocal || userPasswordLengthLocal === null) {
      alert('Oops. Try again!');

      // Reset input to empty string and restart function

      userPasswordLengthLocal = ''
      getPasswordOptions()
    }

    // Function to check if the user is actually typing numbers and not just letters

    var typedNumbers = function (userPasswordLengthLocal) {
      return /^[0-9]+$/.test(userPasswordLengthLocal);
    }

    // Conditional to check if the user has typed actual numbers and if not alert to try again, then restart the function. If numbers are typed then proceed to confirm range.

    if (!typedNumbers(userPasswordLengthLocal)) {
      alert(`You didn't type a number! Try again.`);
      getPasswordOptions();
    } else {
      console.log('Valid Number')
    }

    // Prompts store data as strings, so need to parse into a number

  }

  //  Function to confirm Character Sets

  function confirmCharacterSets() {

    // Confirm if user wants to use Special Characters

    var confirmSpecChars = confirm(`Do you want to use Special Characters in your Password? 
  
For example @ % + # $ etc`);

    // Conditional for if user wants Special Characters included or not. If true, add one random character to password, and add Special Characters array to Mega Char Options array. If not, no character is added and the array is left out of the mega array.

    if (!confirmSpecChars) {
      console.log('Password does not include Special Characters');
    } else {
      console.log('Password includes Special Characters');
      randomSpecCharInt = Math.floor(Math.random() * specialCharacters.length);
      randomSpecChar = specialCharacters[randomSpecCharInt];
      generatedPassword += randomSpecChar;
      charOptions = charOptions.concat(specialCharacters);
      userPasswordLengthGlobal--;
    }

    // Confirm if user wants to use Numbers

    var confirmNums = confirm(`Do you want to use Numbers in your Password?`);

    // Conditional for if user wants Numbers included or not. If true, add one random character to password, and add Numbers array to Mega Char Options array. If not, no character is added and the array is left out of the mega array.

    if (!confirmNums) {
      console.log('Password does not include Numbers')
    } else {
      console.log('Password includes Numbers');
      randomNumCharInt = Math.floor(Math.random() * numericCharacters.length);
      randomNumChar = numericCharacters[randomNumCharInt];
      generatedPassword += randomNumChar;
      charOptions = charOptions.concat(numericCharacters);
      userPasswordLengthGlobal--;
    }

    // Confirm if user wants to use Lower Case Characters

    var confirmLowerCase = confirm(`Do you want to use Lower Case Characters in your Password?`)

    // Conditional for if user wants Lower Case Characters included or not. If true, add one random character to password, and add Lower Case Characters array to Mega Char Options array. If not, no character is added and the array is left out of the mega array.

    if (!confirmLowerCase) {
      console.log('Password does not include Lower Case characters');
    } else {
      console.log('Password includes Lower Case characters');
      randomLowerCaseCharInt = Math.floor(Math.random() * lowerCasedCharacters.length);
      randomLowerCaseChar = lowerCasedCharacters[randomLowerCaseCharInt];
      generatedPassword += randomLowerCaseChar;
      charOptions = charOptions.concat(lowerCasedCharacters);
      userPasswordLengthGlobal--;
    }

    // Confirm if user wants to use Upper Case Characters

    var confirmUpperCase = confirm(`Do you want to use Upper Case Characters in your Password?`)

    // Conditional for if user wants Upper Case Characters included or not. If true, add one random character to password, and add Upper Case Characters array to Mega Char Options array. If not, no character is added and the array is left out of the mega array.

    if (!confirmUpperCase) {
      console.log('Password does not include Upper Case characters');
    } else {
      console.log('Password includes Upper Case characters');
      randomUpperCaseCharInt = Math.floor(Math.random() * upperCasedCharacters.length);
      randomUpperCaseChar = upperCasedCharacters[randomUpperCaseCharInt];
      generatedPassword += randomUpperCaseChar;
      charOptions = charOptions.concat(upperCasedCharacters);
      userPasswordLengthGlobal--;
    }

    // Conditional for if no character sets are selected. If true, restart the Confirm Characters function.

    if (!confirmSpecChars && !confirmNums && !confirmLowerCase && !confirmUpperCase) {
      alert('You need to select at least one character set to proceed.')
      confirmCharacterSets();
    }
  }

}

// Global Variable for Random Int to be used when adding characters to mega array

var randomMegaIntGlobal;

// Function for getting a random element from an array

function getRandom(arr) {

  // Local Variable for Random Int

  var randomMegaIntLocal = Math.floor(Math.random() * arr.length);

  // Assign Global variable with local variable value, then return value

  randomMegaIntGlobal = randomMegaIntLocal;
  return randomMegaIntGlobal;

}

// Function to generate password with user input

function generatePassword() {

  getPasswordOptions();

  // For loop that loops the number of times that matches the length the user chose

  for (let i = 0; i < userPasswordLengthGlobal; i++) {

    // Call Get Random Function for each loop

    getRandom(charOptions);

    // Add the Random item from the mega array to the end of the generated password

    generatedPassword += charOptions[randomMegaIntGlobal];

  }

  console.log(`The generated password is ${generatedPassword}`);
  console.log(`The generated password length is ${generatedPassword.length} characters`);

  // Once we finish the for loop, return the generated password

  return generatedPassword;

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
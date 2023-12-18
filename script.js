// Array of special characters to be included in password
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

//  You can store the generatedPassword as a string and concat each character OR
//  as an array and push each character, then join once you have enough characters
var charOptions;
var generatedPassword;

var userPasswordLengthGlobal;

// Function to prompt user for password options
function getPasswordOptions() {

  // Reset generated password and back to an empty string and selected options array back to empty if the user restarts the function 

  charOptions = [];
  generatedPassword = '';
  console.clear();

  // Prompt for password length

  var userPasswordLengthLocal = prompt(`Let's generate a password. Please input a number between 8 and 128.`);

  if (!userPasswordLengthLocal || userPasswordLengthLocal === null) {
    console.log(`The user entered "${userPasswordLengthLocal}"`)
    console.log(`The user entry is a type of ${typeof userPasswordLengthLocal}`)
    alert('Oops. Try again!');
    getPasswordOptions()
  } else {
    var typedNumbers = function (userPasswordLengthLocal) {
      return /^[0-9]*$/.test(userPasswordLengthLocal);
    }

    if (!typedNumbers(userPasswordLengthLocal)) {
      alert(`You didn't type a number!`);
      getPasswordOptions()
    } else if (userPasswordLengthLocal === '') {
      alert(`You didn't type anything!`);
      getPasswordOptions()
    } else {

      console.log(`The user entered "${userPasswordLengthLocal}"`)
      console.log(`The user entry is a type of ${typeof userPasswordLengthLocal}`)

      // Prompts store data as strings, so need to parse into a number

      userPasswordLengthLocal = parseInt(userPasswordLengthLocal);
      console.log(userPasswordLengthLocal);
      console.log(`The user entry is a type of ${typeof userPasswordLengthLocal}`);
      userPasswordLengthGlobal = userPasswordLengthLocal;
      // alert(typeof userPasswordLength);
    }

    // At least 8 characters, no more than 128 characters
    // Conditional to check that the number that was entered is in range

    if (userPasswordLengthGlobal < 8 || userPasswordLengthGlobal > 128) {
      alert('Needs to be between 8 and 128, please try again');
      // If the user's input is out of range, either return out of the function or call the function again
      getPasswordOptions()
    } else {

      console.log(`The user entry is between 8 and 128`)

      //  Prompt User for Character Sets

      // Confirm if user wants to use Special Characters

      var confirmSpecChars = confirm(`Do you want to use Special Characters in your Password? 
  
  For example @ % + # $ etc`);

      if (!confirmSpecChars) {
        console.log('Password has no Special Characters')
      } else {
        randomSpecCharInt = Math.floor(Math.random() * specialCharacters.length);
        console.log(`Random Special Character Int: ${randomSpecCharInt}`);
        randomSpecChar = specialCharacters[randomSpecCharInt];
        console.log(randomSpecChar);
        generatedPassword += randomSpecChar;
        console.log(`The password so far is ${generatedPassword}`);
        charOptions = charOptions.concat(specialCharacters);
        console.log(`The Character Options so far are ${charOptions}`);
        userPasswordLengthGlobal--;
        console.log(`The Remaining password characters are ${userPasswordLengthGlobal}`)
        console.log('----------------------------------------')
      }

      // Confirm if user wants to use Numbers

      //  Once they select a character set:
      //  Generate a random character for each selected character set and add this to the generated password

      var confirmNums = confirm(`Do you want to use Numbers in your Password?`);

      if (!confirmNums) {
        console.log('Password has no Numbers')
      } else {
        randomNumCharInt = Math.floor(Math.random() * numericCharacters.length);
        console.log(`Random Number Int: ${randomNumCharInt}`);
        randomNumChar = numericCharacters[randomNumCharInt];
        console.log(randomNumChar);
        generatedPassword += randomNumChar;
        console.log(`The password so far is ${generatedPassword}`);
        charOptions = charOptions.concat(numericCharacters);
        console.log(`The Character Options so far are ${charOptions}`);
        userPasswordLengthGlobal--;
        console.log(`The Remaining password characters are ${userPasswordLengthGlobal}`);
        console.log('----------------------------------------')
      }
      // Confirm if user wants to use Lower Case Characters

      var confirmLowerCase = confirm(`Do you want to use Lower Case Characters in your Password?`)

      if (!confirmLowerCase) {
        console.log('Password has no Lower Case characters')
      } else {
        randomLowerCaseCharInt = Math.floor(Math.random() * lowerCasedCharacters.length);
        console.log(`Random Lower Case Int: ${randomLowerCaseCharInt}`);
        randomLowerCaseChar = lowerCasedCharacters[randomLowerCaseCharInt];
        console.log(randomLowerCaseChar);
        generatedPassword += randomLowerCaseChar;
        console.log(`The password so far is ${generatedPassword}`);
        charOptions = charOptions.concat(lowerCasedCharacters);
        console.log(`The Character Options so far are ${charOptions}`);
        userPasswordLengthGlobal--;
        console.log(`The Remaining password characters are ${userPasswordLengthGlobal}`);
        console.log('----------------------------------------')
      }

      // Confirm if user wants to use Upper Case Characters

      var confirmUpperCase = confirm(`Do you want to use Upper Case Characters in your Password?`)

      if (!confirmUpperCase) {
        console.log('Password has no Upper Case characters')
      } else {
        randomUpperCaseCharInt = Math.floor(Math.random() * upperCasedCharacters.length);
        console.log(`Random Upper Case Int: ${randomUpperCaseCharInt}`);
        randomUpperCaseChar = upperCasedCharacters[randomUpperCaseCharInt];
        console.log(randomUpperCaseChar);
        generatedPassword += randomUpperCaseChar;
        console.log(`The password so far is ${generatedPassword}`);
        charOptions = charOptions.concat(upperCasedCharacters);
        console.log(`The Character Options so far are ${charOptions}`);
        userPasswordLengthGlobal--;
        console.log(`The Remaining password characters are ${userPasswordLengthGlobal}`);
        console.log('----------------------------------------')
      }
    }
    // TODO need an else statement for if no characters are selected and if so start the function over

    //  Then Either push selected character sets to a mega-array of all selected characters

  }
}

var randomMegaIntGlobal;

// Function for getting a random element from an array
function getRandom(arr) {

  //  Need a variable to hold the index that's being generated
  //  Generate a random number

  var randomMegaIntLocal = Math.floor(Math.random() * arr.length);

  randomMegaIntGlobal = randomMegaIntLocal;
  return randomMegaIntGlobal;

}

// Function to generate password with user input
function generatePassword() {

  getPasswordOptions();

  // For loop that loops the number of times that matches the length the user chose

  for (let i = 0; i < userPasswordLengthGlobal; i++) {

    getRandom(charOptions);
    // console.log(`The Get Random result is ${getRandom(charOptions)}`)

    // Add that character to the password
    // That number is the index for a character in the mega-array
    // So then, mega-array[generated-index] is the actual character

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
// Assignment Code
//Button
var generateBtn = document.querySelector("#generate");
//Check Boxes
var upperCheck = document.querySelector("#uppercases");
var lowerCheck = document.querySelector("#lowercases");
var numCheck = document.querySelector("#numbers");
var specialCheck = document.querySelector("#specialchar");
var lengthForm = document.querySelector("#length");

//Functions To Generate Random
function randomlower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function randomupper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function randomnumber() {
  const numbers = "0123456789";
  return numbers[Math.floor(Math.random() * numbers.length)];
}
function randomspecial() {
  const specialChar = "._-~[]{}(),:;?^$#!\\/+%@";
  return specialChar[Math.floor(Math.random() * specialChar.length)];
}

//Object to call on to trigger functions for password generation
const randomizer = {
  lower: randomlower,
  upper: randomupper,
  number: randomnumber,
  special: randomspecial,
};

//Takes User Input and then Creates Password
function writePassword() {
  //Reads the Selection of the Password Form/Checks
  const length = parseInt(lengthForm.value, 10);
  const chklower = lowerCheck.checked;
  const chkupper = upperCheck.checked;
  const chknum = numCheck.checked;
  const chkspecial = specialCheck.checked;

  //References the Generate Password Function
  var password = generatePassword(
    length,
    chklower,
    chkupper,
    chknum,
    chkspecial
  );

  //Initializes variable for password textfield replacement
  var passwordText = document.querySelector("#password");

  //Sets Text Form to Generated Password
  passwordText.value = password;
}

//Password Generator
function generatePassword(length, lower, upper, number, special) {
  //Initiates blank password string
  let pass = "";

  //Checks the amount of selections
  const diffTypes = lower + upper + number + special;
  console.log(diffTypes);
  //Creates Object of Selections and Filters out which one is not selected
  const arrayTypes = [{ lower }, { upper }, { number }, { special }];
  //Filters the values that are not true
  const filterTypes = arrayTypes.filter((item) => Object.values(item)[0]);
  console.log(arrayTypes);
  //Lets the user know to make a selection if nothing is chosen
  if (diffTypes === 0) {
    return "Please make selections";
  }
  if(length === 0 || length < 8 || length > 128)
  {
    return "Please choose a length from 8 - 128 characters";
  }
  //Keeps adding a character based on the length chosen
  for (i = 0; i < length; i += diffTypes) {
    filterTypes.forEach((type) => {
      const gener = Object.keys(type)[0];

      pass += randomizer[gener]();
    });
  }
  return pass;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

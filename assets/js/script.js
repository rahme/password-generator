//Assigns Buttons and Check Boxes to Variables
var generateBtn = document.querySelector("#generate");
var uppercases = document.querySelector("#uppercases");
var lowercases = document.querySelector("#lowercases");
var numbers = document.querySelector("#numbers");
var specialchar = document.querySelector("#specialchar");
var length = document.querySelector("#length")

//Functions to Genereate Random Characters
function generateupper(){
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return upper[Math.floor(Math.random() * upper.length)]
}

function generatelower(){
  var lower = "abcdefghijklmnopqrstuvwxyz"
  return lower[Math.floor(Math.random() * lower.length)]
}

function generatenumber(){
  var number = "0123456789"
  return number[Math.floor(Math.random() * number.length)]
}

function generatespecial(){
  var special = "._-~[]{}(),:;?^$#!\\/+%@"
  return special[Math.floor(Math.random() * special.length)]
}

//Functions to Create Random Password Strings
function oneChoice(up, low, num, spec, len){
  var pass = ''
  if(up == true){
    for(i = 0; i < len; i++){
      pass += generateupper()
    }
  }
  if(low == true){
    for(i = 0; i < len; i++){
      pass += generatelower()
    }
  }
  if(num == true){
    for(i = 0; i < len; i++){
      pass += generatenumber()
    }
  }
  if(spec == true){
    for(i = 0; i < len; i++){
      pass += generatespecial()
    }
  }
  return pass;
}
function twoChoices(up, low, num, spec, len){
  var pass = ''
  var remainder = len % 2;
  var itt = Math.floor(len/2);

  if(num == true && up == true){
    for(i = 0; i < itt ; i++){
      pass += generatenumber()
      pass += generateupper()
    }
    if(remainder > 0){
      pass += generatenumber()
    }
  }
  if(num == true && low == true){
    for(i = 0; i < itt; i++){
      pass += generatenumber()
      pass += generatelower()
    }
    if(remainder > 0){
      pass += generatenumber()
    }
  }
  if(num == true && spec == true){
    for(i = 0; i < itt; i++){
      pass += generatenumber()
      pass += generatespecial()
    }
    if(remainder > 0){
      pass += generatenumber()
    }
  }
  if(up == true && low == true){
    for(i = 0; i < itt; i++){
      pass += generateupper()
      pass += generatelower()
    }
    if(remainder > 0){
      pass += generateupper()
    }
  }
  if(up == true && spec == true){
    for(i = 0; i < itt; i++){
      pass += generateupper()
      pass += generatespecial()
    }
    if(remainder > 0){
      pass += generateupper()
    }
  }
  if(spec == true && low == true){
    for(i = 0; i < itt; i++){
      pass += generatespecial()
      pass += generatelower()
    }
    if(remainder > 0){
      pass += generatespecial()
    }
  }
  return pass;
}
function threeChoices(up, low, num, spec, len){
  var pass = ''
  var remainder = len % 3;
  var itt = Math.floor(len/3);

  if(num === true && up === true && low === true){
    for(i = 0; i < itt; i++){
      pass += generatenumber()
      pass += generateupper()
      pass += generatelower()
    }
    if(remainder === 1){
      pass += generatenumber()
    }
    if(remainder === 2){
      pass += generatenumber()
      pass += generateupper()
    }
  }
  if(num === true && up === true && spec === true){
    for(i = 0; i < itt; i++){
      pass += generatenumber()
      pass += generateupper()
      pass += generatespecial()
    }
    if(remainder === 1){
      pass += generatenumber()
    }
    if(remainder === 2){
      pass += generatenumber()
      pass += generateupper()
    }
  }
  if(num === true && spec === true && low === true){
    for(i = 0; i < itt; i++){
      pass += generatenumber()
      pass += generatespecial()
      pass += generatelower()
    }
    if(remainder === 1){
      pass += generatenumber()
    }
    if(remainder === 2){
      pass += generatenumber()
      pass += generatespecial()
    }
  }
  if(spec === true && up === true && low === true){
    for(i = 0; i < itt; i++){
      pass += generatespecial()
      pass += generateupper()
      pass += generatelower()
    }
    if(remainder === 1){
      pass += generatespecial()
    }
    if(remainder === 2){
      pass += generatespecial()
      pass += generateupper()
    }
  }
  return pass
}
function fourChoices(len){
  var pass = ''
  var remainder = len % 4;
  var itt = Math.floor(len/4);

  for(i = 0; i < itt; i++){
    pass += generateupper()
    pass += generatelower()
    pass += generatenumber()
    pass += generatespecial()
  }

  if(remainder === 1){
    pass += generateupper()
  }
  if(remainder === 2){
    pass += generateupper()
    pass += generatelower()
  }
  if(remainder === 3){
    pass += generateupper()
    pass += generatelower()
    pass += generatenumber()
  }
  return pass
  }


//Function to Create Random Password
function generatepassword(){
  var up = uppercases.checked;
  var low = lowercases.checked;
  var num = numbers.checked;
  var spec = specialchar.checked;
  var len = parseInt(length.value, 10)

  typesChosen = up + low + num + spec
  
  let password = ''

  if(typesChosen === 0){return "Please make choices"}
  if(len < 4){return "Please choose length between 4 - 128"}
  if(len > 128){return "Please choose length between 4 - 128"}

  switch(typesChosen){
    case 1:
      password = oneChoice(up, low, num, spec, len)
      break;
    case 2:
      password = twoChoices(up, low, num, spec, len)
      break;
    case 3:
      password = threeChoices(up, low, num, spec, len)
      break;
    case 4:
      password = fourChoices(len)
      break;
  }

  return password
}

//Function to Trigger Password Generation and Push to the Webpage
function writePassword() {
  var password = generatepassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

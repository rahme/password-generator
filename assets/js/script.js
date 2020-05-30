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
  var choice = ''
  if(num == true && up == true){
    for(i = 0; i < len; i++){
      choice = Math.floor(Math.random() * 2)
      console.log(choice)
      if(choice === 0){
        pass += generateupper()
      }
      if(choice === 1){
        pass += generatenumber()
      }
    }
  }
  if(num == true && low == true){
    for(i = 0; i < len; i++){
      choice = Math.floor(Math.random() * 2)
      console.log(choice)
      if(choice === 0){
        pass += generatelower()
      }
      if(choice === 1){
        pass += generatenumber()
      }
    }
  }
  if(num == true && spec == true){
    for(i = 0; i < len; i++){
      choice = Math.floor(Math.random() * 2)
      console.log(choice)
      if(choice === 0){
        pass += generatespecial()
      }
      if(choice === 1){
        pass += generatenumber()
      }
    }
  }
  if(low == true && up == true){
    for(i = 0; i < len; i++){
      choice = Math.floor(Math.random() * 2)
      console.log(choice)
      if(choice === 0){
        pass += generateupper()
      }
      if(choice === 1){
        pass += generatelower()
      }
    }
  }
  if(spec == true && up == true){
    for(i = 0; i < len; i++){
      choice = Math.floor(Math.random() * 2)
      console.log(choice)
      if(choice === 0){
        pass += generateupper()
      }
      if(choice === 1){
        pass += generatespecial()
      }
    }
  }
  if(low == true && spec == true){
    for(i = 0; i < len; i++){
      choice = Math.floor(Math.random() * 2)
      console.log(choice)
      if(choice === 0){
        pass += generatelower()
      }
      if(choice === 1){
        pass += generatespecial()
      }
    }
  }

  return pass;
}
function threeChoices(up, low, num, spec, len){
  var pass = ''
  var choice = ''

  if(num === true && up === true && low === true){
    for(i = 0; i < len; i++){
      choice = Math.floor(Math.random() * 3)
      switch(choice){
        case 0:
          pass += generatenumber()
          break;
        case 1:
          pass += generateupper()
          break;
        case 2:
          pass += generatelower()
          break;
      }
    }
  }
  if(num === true && up === true && spec === true){
    for(i = 0; i < len; i++){
      choice = Math.floor(Math.random() * 3)
      switch(choice){
        case 0:
          pass += generatenumber()
          break;
        case 1:
          pass += generateupper()
          break;
        case 2:
          pass += generatespecial()
          break;
      }
    }
  }
  if(num === true && spec === true && low === true){
    for(i = 0; i < len; i++){
      choice = Math.floor(Math.random() * 3)
      switch(choice){
        case 0:
          pass += generatenumber()
          break;
        case 1:
          pass += generateupper()
          break;
        case 2:
          pass += generatelower()
          break;
      }
    }
  }
  if(spec === true && up === true && low === true){
    for(i = 0; i < len; i++){
      choice = Math.floor(Math.random() * 3)
      switch(choice){
        case 0:
          pass += generatenumber()
          break;
        case 1:
          pass += generateupper()
          break;
        case 2:
          pass += generatelower()
          break;
      }
    }
  }
  return pass
}
function fourChoices(len){
  var pass = ''
  var choice = ''

  for(i = 0; i < len; i++){
    choice = Math.floor(Math.random() * 4)
    switch(choice){
      case 0:
        pass += generatespecial()
        break;
      case 1:
        pass += generatenumber()
        break;
      case 2:
        pass += generatelower()
        break;
      case 3:
        pass += generateupper()
        break;
    }
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
      console.log(1)
      password = oneChoice(up, low, num, spec, len)
      break;
    case 2:
      console.log(2)
      password = twoChoices(up, low, num, spec, len)
      break;
    case 3:
      console.log(3)
      password = threeChoices(up, low, num, spec, len)
      break;
    case 4:
      password = fourChoices(len)
      console.log(4)
      break;
  }

  return password
}

//Function to Trigger Password Generation and Push to Webpage
function writePassword() {
  var password = generatepassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

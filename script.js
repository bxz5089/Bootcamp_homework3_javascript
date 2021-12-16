var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value= password
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword(){
  var charLength = prompt("How many characters do you want in your new password?");
  var whichCase = confirm("Do you want uppercase letters?");
  var num = confirm("Do you want numbers in your password?");
  var special = confirm("Do you want special characters in your password?");

  var allCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
                        "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
                        "0","1","2","3","4","5","6","7","8","9",
                        "!","@","#","$","%","&","?"];

  var upperCharactersNoNumSpecial = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
                                      "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var upperCharactersNumNoSpecial = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
                                      "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
                                      "0","1","2","3","4","5","6","7","8","9",];
  var upperCharactersSpecialNoNum = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
                                      "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
                                      "!","@","#","$","%","&","?"];

  var lowerCharactersNumSpecial = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
                                    "0","1","2","3","4","5","6","7","8","9","!","@","#","$","%","&","?"];
  var lowerCharactersNumNoSpecial = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
                                      "0","1","2","3","4","5","6","7","8","9"];
  var lowerCharactersSpecialNoNum = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
                                      "!","@","#","$","%","&","?"];

  var lowerCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  
  let password = '';

  // if uppercase, numbers, and special are confirmed
  if(num === true && whichCase === true && special === true){
    for(var i = 0; i <charLength; i++){

      charPick = allCharacters[Math.floor(Math.random()*allCharacters.length)];
      console.log(charPick);
      password = password.toString()+charPick.toString();
      console.log(password);
    }
  }  
  // if uppercase but no numbers and special
  else if(num != true && whichCase === true && special != true){
    for(var i = 0; i <charLength; i++){

      charPick = upperCharactersNoNumSpecial[Math.floor(Math.random()*upperCharactersNoNumSpecial.length)];
      console.log(charPick);
      password = password.toString()+charPick.toString();
      console.log(password);
    }
  }  
   // if uppercase and numbers but no special
   else if(num === true && whichCase === true && special != true){
    for(var i = 0; i <charLength; i++){

      charPick = upperCharactersNumNoSpecial[Math.floor(Math.random()*upperCharactersNumNoSpecial.length)];
      console.log(charPick);
      password = password.toString()+charPick.toString();
      console.log(password);
    }
  }  
 // if uppercase and special but no number
  else if(num != true && whichCase === true && special === true){
    for(var i = 0; i <charLength; i++){

      charPick = upperCharactersSpecialNoNum[Math.floor(Math.random()*upperCharactersSpecialNoNum.length)];
      console.log(charPick);
      password = password.toString()+charPick.toString();
      console.log(password);
    }
  }  
  // if no uppercase but numbers and special
  else if(num === true && whichCase != true && special === true){
    for(var i = 0; i <charLength; i++){

      charPick = lowerCharactersNumSpecial[Math.floor(Math.random()*lowerCharactersNumSpecial.length)];
      console.log(charPick);
      password = password.toString()+charPick.toString();
      console.log(password);
    }
  }  
   // if no uppercase and numbers but special
   else if(num != true && whichCase != true && special === true){
    for(var i = 0; i <charLength; i++){

      charPick = lowerCharactersSpecialNoNum[Math.floor(Math.random()*lowerCharactersSpecialNoNum.length)];
      console.log(charPick);
      password = password.toString()+charPick.toString();
      console.log(password);
    }
  }  
 // if no uppercase and special but number
  else if(num === true && whichCase != true && special != true){
    for(var i = 0; i <charLength; i++){

      charPick = upperCharactersSpecialNoNum[Math.floor(Math.random()*upperCharactersSpecialNoNum.length)];
      console.log(charPick);
      password = password.toString()+charPick.toString();
      console.log(password);
    }
  }
  // no numbers, uppercase, or special
  else if(num != true && whichCase != true && special != true){
    for(var i = 0; i <charLength; i++){

      charPick = lowerCharacters[Math.floor(Math.random()*lowerCharacters.length)];
      console.log(charPick);
      password = password.toString()+charPick.toString();
      console.log(password);

  } 
    }
    return password;
}
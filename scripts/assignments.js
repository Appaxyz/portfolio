// Function that compares two numbers and returns the largest//
function largerNum(){
    let num1 = parseInt(prompt("Enter the first number: "));
    let num2 =  parseInt(prompt("Enter the second number: "));
    let output = ""
    if (num1 > num2){
    output = num1;
    } else if (num1 == num2){
    output = "The numbers entered are equal";
    } else if (num2 > num1){
    output = num2;
    } else {
    output = "Invalid Input";
    }
    document.getElementById("largerNum").innerHTML = 'The Largest Number Is ' + output;
}
//Function which displays the sign of the sum of 3 numbers//
function signOfProduct(){
    var a = parseInt(prompt("Enter a number"));
    var b = parseInt(prompt("Enter a number"));
    var c = parseInt(prompt("Enter a number"));
    let total = a*b*c
    if (total > 0){
        document.getElementById("signOfProduct").innerHTML = "The sign of the product is +";
    } else if(total < 0){
        document.getElementById("signOfProduct").innerHTML = "The sign of the product is -";

    }else{
        document.getElementById("signOfProduct").innerHTML = "Invalid Input"
    }
}

//Function that takes input of three numbers and returns it in order of least to greatest//
function threeNumberSort(){
    var a = parseInt(prompt("Enter a number"));
    var b = parseInt(prompt("Enter a number"));
    var c = parseInt(prompt("Enter a number"));
    let list = [a,b,c]
    numArray = list.sort((a, b) => a - b);
    document.getElementById("threeNumberSort").innerHTML = "The Correct Order Is: " + numArray
}
//Function that for loops all multiples of three under 1000 and adds them//
function forSumThrees(){
    let sum = 0;
    for(let i = 0; i<1000; i++){
        
        if(i%3===0){
            sum = sum + i
        }
    }
    document.getElementById("forSumThrees").innerHTML = sum
}
// Function that uses a while loop to add all multiples of 3 under 1000//
function whileSumThrees(){
    let total = 0;
    let i = 0;
    while(i<1000){
        total+=i
        i=i+3
    }
document.getElementById("whileSumThrees").innerHTML = total
}

// Function that checks all the multiples of 4 and 10 under 100 using if statements//
function tenFour(){
    for(let i=0; i<=100; i++){
       if(i%4===0){
            console.log('Four')
        }
      if(i%10===0){
            console.log('Ten')
        }
      if(i%4===0 && i%10===0){
            console.log('TenFour')
        }
    }
}

//Function that returns the century a inputted year is in//
function centuryFromYear(){
    let year = parseInt(prompt("Enter a Year"));
    century = Math.floor((year-1)/100) + 1;
    century = String(century)
    differential = century[century.length -1]
    if (century!=11 && differential==1){
    document.getElementById("centuryFromYear").innerHTML = 'That Year Is In The ' + century + 'st Century'
    }else if(century !=12 && differential==2){
        document.getElementById("centuryFromYear").innerHTML = 'That Year Is In The ' + century + 'nd Century'
    }else if(century!=13 && differential==3){
        document.getElementById("centuryFromYear").innerHTML = 'That Year Is In The ' + century + 'rd Century'
    } else{
        document.getElementById("centuryFromYear").innerHTML = 'That Year Is In The ' + century + 'th Century'
    }
}

// Function that returns the missing angle of a triangle by substracting two givens from 180//
function thirdAngle(){
    var a = parseInt(prompt("Enter one angle of a triangle"));
    var b = parseInt(prompt("Enter another angle of a triangle "));
    let add = a+b
    if(add<180){
        let missing = 180-add
        document.getElementById("thirdAngle").innerHTML = 'The missing angle is ' + missing
    }else if(add>180){
        document.getElementById("thirdAngle").innerHTML = 'Invalid angle values'
    }else{
        document.getElementById("thirdAngle").innerHTML = 'Invalid Input'
    }
}

function encryptor(){
  
   let initial = prompt('Please Enter Your Message') 
   let cipher = ''
   let messageList = initial.split(" "); // Splits plain text message by word
   for(let i=0; i<messageList.length; i=i+1){  
       
    if(messageList[i].length<2){ //Checks if the message length is only 1 letter
        method_1 = messageList[i][0].replace(messageList[i][0], Math.floor(Math.random() * 90 + 10)).toUpperCase(); // replaces the first letter of each word with a random 2 digit number

        method_2 = messageList[i].slice(-1).replace("", "/"); // adds a slash before each final letter
    
        cipher += method_1+ method_2 + "*" +Math.floor(Math.random() * 100) + ' ' ; // compiles the cipher consisting of the random number, slash, one letter message, an asterik, and another random number

       }if(messageList[i].length>=2){ //Checks if the message length is more than only 1 letter
        method_1 = messageList[i][0].replace('', Math.floor(Math.random() * 90 + 10)).toUpperCase(); //makes the first letter of each word with a random 2 digit number

        method_2 = messageList[i].slice(-1).replace("", "/"); //Takes the last letter of each word and adds a / in front
    
        cipher += messageList[i].slice(1, -1) + method_1 + method_2 + "*" +Math.floor(Math.random() * 100) + ' ' ; // collects the cipher consisting of all the letters in the word except the beginning and last, a random 2 digit number as well as the first letter, the word's final letter with a slash in front followed by a asterik and another random number  
       }
   }
   document.getElementById("encryptor").innerHTML = cipher
}


function decryptor(){
    let cipher_text = prompt('Please Input Your Encrypted Text')
    let decrpyt = ''
    let base = cipher_text.split(" ") // Splits cipher by word/spaces
    for(let i = 0; i<base.length; i=i+1){ //For loop that will decrypt each ciphered word saved in base
        
        slash = base[i].replace(/[0-9]/g, '')//Removes all numbers present in the cipher
        asterik = slash.replace('/', '') // Removes all slashes present in the cipher
        method_3 = asterik.replace('*','') // Removes all asterik present in the cipher

        secondL = method_3.charAt(method_3.length - 2) // Grabs second last letter of the cipher (Represents first letter of decrypted)
        method_3 = method_3.replace("",secondL) //Places second last letter at the beginning
        lastLetter = method_3.charAt(method_3.length - 1) // Grabs last letter of the cipher
        finalized = method_3.substring(0,method_3.length - 2) // Combines all letters up until last letter into finalized variable
        decrpyt = finalized.toLowerCase() + lastLetter.toLowerCase() // Adds final letter to the end of all the other decrypted letters
        document.getElementById("decryptor").innerHTML = 'Check Console'
        console.log(decrpyt) // Logs each decrypted word to the console

 
    }
    console.log('----------------------------Message End----------------------------')

}
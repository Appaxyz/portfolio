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
    document.getElementById("threeNumberSort").innerHTML = "The Correct Order Is: " + list
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
    document.getElementById("centuryFromYear").innerHTML = 'That Year Is In The ' + century + 'th Century'
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

function fun_9(){
    alert('Assignment 9 Coming Soon')
}


function fun_10(){
    alert('Assignment 10 Coming Soon')
}



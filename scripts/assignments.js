function fun_1(){
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
    document.getElementById("largerNum").innerHTML = output;
}

function fun_2(){
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

function fun_3(){
    var a = parseInt(prompt("Enter a number"));
    var b = parseInt(prompt("Enter a number"));
    var c = parseInt(prompt("Enter a number"));
    let list = [a,b,c]
    let sorted = list.sort()
    document.getElementById("threeNumberSort").innerHTML = sorted
}

function fun_4(){
    let sum = 0;
    for(let i = 0; i<1000; i++){
        
        if(i%3===0){
            sum = sum + i
        }
    }
    document.getElementById("forSumThrees").innerHTML = sum
}

function fun_5(){
    let total = 0;
    let i = 0;
    while(i<1000){
        i=i+3
        sum=sum+i
    }
document.getElementById("whileSumThrees").innerHTML = sum
}

function fun_6(){
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

function fun_7(){
    let year = parseInt(prompt("Enter a Year"));
    century = Math.floor((year-1)/100) + 1;
    document.getElementById("centuryFromYear").innerHTML = century
}

function fun_8(){
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



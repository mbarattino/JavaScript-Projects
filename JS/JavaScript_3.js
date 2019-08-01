function my_Second_Function() {
    var String = "This text is blue";
    var result = String.fontcolor("blue");
    document.getElementById("Blue_Text").innerHTML = result;
}

function myFunction() {
    var sentence = "I am learning";
    sentence += " a lot from this book!";
    document.getElementById("Concatenate").innerHTML = sentence;
}


function addition_Function() {
    var addition = 2+2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}

function subtraction_Function() {
    var Subtraction = 5-2;
    document.getElementById("Math2").innerHTML = "5 - 2 = " + Subtraction;
}

function multiplication_Function() {
    var multiplication = 9*5;
    document.getElementById("Math3").innerHTML = "9 x 5 = " + multiplication;
}

function division_Function() {
    var division = 105/15;
    document.getElementById("Math4").innerHTML = "105 / 15 = " + division;
}

function more_Math() {
    var simple_math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Math5").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_math;
}

function modulus_Operator() {
    var simple_math2 = 25 % 6;
    document.getElementById("Math6").innerHTML = "When you divide 25 by 6 you have a remainder of : " + simple_math2;
}

function negation_Operator() {
    var x = 10;
    document.getElementById("Math7").innerHTML = -x;
}

var y = 5;
y++;
document.write("5 + 1 = " + y);

var z = 3;
z--;
document.write("<br>3 - 1 = " + z);

window.alert(Math.round(Math.random() * 200));

document.write("<br>The square root of 100 is: " + Math.sqrt(100));
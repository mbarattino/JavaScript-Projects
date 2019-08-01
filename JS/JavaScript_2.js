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

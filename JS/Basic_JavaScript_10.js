function Call_Loop() {
    var Digit = "";
    var X = 10;
    while (X > -1) {
        Digit += "<br>" + X;
        X--;
    }
    document.getElementById("Loop").innerHTML = Digit;
}


function string_length() {
    var str = "How many characters are in this sentence?";
    var n = str.length;
    document.getElementById("num").innerHTML = n;
}


var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}


function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";

}


function constant_function() {
    const Musical_Instrument = {type: "Guitar", brand: "Fender", color: "black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.color + " " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}


var X = 82;
document.write(X);

{
    let X = 33;
    document.write("<br>" + X);
}
document.write("<br>" + X);


function myFunction() {
    function addTwo() {
        x=10;
        y=15;
    return x + y;
    }
    document.getElementById("value").innerHTML = addTwo();
}


function myFunction1() {
    let car = {
        make: "Dodge ",
        model: "Viper ",
        year: "2021 ",
        color: "red ",
        description : function() {
            return "The car is a " + this.year + this.color + this.make + this.model;
        }
    };
    document.getElementById("Car_Object").innerHTML = car.description();
}


function myFunction2() {
    var text = "";
    var i;
    for (i=0; i < 10; i++) {
        if (i === 3) {break; }
        text += "The number is " + i + "<br>";
    }
    document.getElementById("test").innerHTML = text;
}


function myFunction3() {
    var text = "";
    var i;
    for (i = 0; i < 10; i++) {
        if (i === 3) {continue; }
        text += "The number is " + i + "<br>";
    }
    document.getElementById("test2").innerHTML = text
}
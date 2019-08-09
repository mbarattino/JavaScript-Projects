function favorite_City() {
    var City_Output;
    var City_Input = document.getElementById("input_city").value;
    var string = " is the best city in Texas!"
    switch(City_Input) {
        case "Austin":
            City_Output = "Austin" + string;
        break;
        case "Dallas":
            City_Output = "Dallas" + string;
        break;
        case "Fort Worth":
            City_Output = "Fort Worth" + string;
        break;
        case "Houston":
            City_Output = "Houston" + string;
        break;
        case "San Antonio":
            City_Output = "San Antonio" + string;
        break;
        default:
            City_Output = "Please enter a city from the list above";
    }
    document.getElementById("city_output").innerHTML = City_Output;
}

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "This text has changed!";
}

function myImage() {
    var A = document.getElementById("ID_Name");
    var ATX = A.getContext("2d");
    var img = document.getElementById("image1");
    ATX.drawImage(img,0,0);
}

window.onload = function() {
    var c = document.getElementById("gradient");
    var ctx = c.getContext("2d");

    var grd = ctx.createLinearGradient(0, 0, 500, 0);
    grd.addColorStop(0, "red");
    grd.addColorStop(1, "purple");

    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, 500, 250);
}
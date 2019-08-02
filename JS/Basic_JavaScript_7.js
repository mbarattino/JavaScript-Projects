var y = 5;
function add1() {
    document.write(y + 10 + "<br>");
}
function add2() {
    document.write(500 - y + "<br>");
}
add1();
add2();

function add3() {
    var x = 5;
    document.write(x + 10 + "<br>");
}
function add4() {
    document.write(500 - x + "<br>");
}
add3();
add4();

/*IF statement get date function*/
function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function get_Shift() {
    if (new Date().getHours() >= 0 && new Date().getHours() <= 6) {
        document.getElementById("display_shift").innerHTML = "You are on mid shift";
    }
    else {
        document.getElementById("display_shift").innerHTML = "You are not on mid shift";
    }
}

function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    } 
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon";
    }
    else {
        Reply = "It is evening time";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}

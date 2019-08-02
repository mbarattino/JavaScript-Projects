document.write(typeof "Hello");

function my_Function1() {
    document.getElementById("Test1").innerHTML = 0/0;
}

function my_Function2() {
    document.getElementById("Test2").innerHTML = isNaN("Hello");
}

function my_Function3() {
    document.getElementById("Test3").innerHTML = isNaN(43);
}

function infinity() {
    document.getElementById("infinity").innerHTML = 3E410;
}

function neg_infinity() {
    document.getElementById("minus_infinity").innerHTML = -2E314;
}

document.write("<br>");
document.write(6 > 9);

document.write("<br>");
document.write(5 < 8);

console.log(6 + 4);

document.write("<br>");
document.write("10" + 5);

document.write("<br>");
document.write(8 + "5");

console.log(4 > 5);

document.write("<br>");
document.write(5==5);

document.write("<br>");
document.write(2==9);

document.write("<br>");
x=4;
y=4;
document.write(x===y);

document.write("<br>");
x=6;
y="four";
document.write(x===y);

document.write("<br>");
x=4;
y="four";
document.write(x===y);

document.write("<br>");
x=8;
y=4;
document.write(x===y);

document.write("<br>");
document.write(4 > 2 && 9 > 1);

document.write("<br>");
document.write(4 > 2 && 9 > 10);

document.write("<br>");
document.write(4 > 6 || 9 > 1);

document.write("<br>");
document.write(4 > 12 || 9 > 11);

function not_Function1() {
    document.getElementById("Not1").innerHTML = !(5 > 10);
}

function not_Function2() {
    document.getElementById("Not2").innerHTML = !(20 > 10);
}
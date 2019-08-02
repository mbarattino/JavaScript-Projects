function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Voting_Age() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age >= 18) ? "You can vote!":"You are not old enough to vote";
    document.getElementById("Vote").innerHTML = Can_vote;
}


function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}


function NewConstruction(builder, floor_plan, sq_ft) {
    this.Home_builder = builder;
    this.Home_floor_plan = floor_plan;
    this.Home_sq_ft = sq_ft;
}

var Matt = new NewConstruction("Gehan", "Princeton", 3000);
var Lauri = new NewConstruction("Castle Rock", "Artesian", 3241);
function Home() {
    document.getElementById("New_and_This").innerHTML = "This home is built by " + Matt.Home_builder + " using the " + Matt.Home_floor_plan + " floor plan, and is " + Matt.Home_sq_ft + " square feet";
}



function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
}

var student1 = new Person("Jane", "Doe", 30);
function roster() {
    document.getElementById("class_roster").innerHTML = student1.firstName + " " + student1.lastName + " is " + student1.age + " years old";
}

function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 5;
        function Plus_one() {Starting_point -= 1;}
        Plus_one();
        return Starting_point;
    }
}
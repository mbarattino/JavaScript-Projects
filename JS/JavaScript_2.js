function validateForm() {
    var x = document.forms["myForm"]["firstname"].value;
    if(x == "") {
        alert("First Name must be filled out");
        return false;
    }

    var y = document.forms["myForm"]["lastname"].value;
    if(y == "") {
        alert("Last Name must be filled out");
        return false;
    }

    var z = document.forms["myForm"]["phone_number"].value;
    if(z == "") {
        alert("Phone number must be filled out");
        return false;
    }
}

function displayType(player) {
    var playerType = player.getAttribute("data-player-type");
    alert(playerType + " plays on the " + player.innerHTML);
}
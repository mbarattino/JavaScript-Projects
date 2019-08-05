function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy";
    var Section = Sentence.slice(27, 33);
    document.getElementById("Slice").innerHTML = Section;
}

function uppercase() {
    var text1 = document.getElementById("convert").innerHTML;
    var text2 = text1.toUpperCase();
    document.getElementById("convert").innerHTML = text2
}

function search () {
    var text = "The Lion King";
    var num = text.search("Lion");
    document.getElementById("test").innerHTML = num;
}

function string_Method() {
    var x = 182;
    document.getElementById("Numbers_to_string").innerHTML = x.toString();
}

function precision_Method() {
    var x = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = x.toPrecision(6);
}

function num_fixed() {
    var x = 5.58147;
    var y = x.toFixed(2);
    document.getElementById("Fixed").innerHTML = y;
}

function value_Of() {
    var x = 20;
    var y = x.valueOf();
    document.getElementById("ValueOf").innerHTML = y;
}
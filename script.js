function textBoxPopup () {
    var x, text;

    // Get the value of the input field with id="numb"
    x = document.getElementById("amount").value;

    if (isNaN(x) || x < 1 || x > 100) {
        alert("Input not valid. Enter a number between 1-100!");
    /*} else {
        alert("Input OK!");
    }
    document.getElementById("demo").innerHTML = text;*/
    }
}
/*----------------------------------------
@author: Roland UDVARLAKI (17439891)
Assignment 2 - CSY1018
All Rights Reserved - Credits given to their representative authors.
----------------------------------------*/

//Pop up notification to validate bet
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

function horse(){

}




/*HORSE*/
//standUp
//standDown
//standLeft
//standRight

/*CHARACTER*/
//walkUp
//walkDown
//walkLeft
//walkRight

/*HORSE ANIMATION*/
//runUp
//runDown
//runLeft
//runRight
























/*function head(){
    var elements = document.getElementsByClassName('head');
    elements[0].style.backgroundImage = 'url(images/' + this.id + '.png)';
}

function myLoadFunction(){
    var element = document.getElementById('head0');
    element.addEventListener('click', clickHead);

    var element = document.getElementById('head1');
     element.addEventListener('click', clickHead);

    var element = document.getElementById('head2');
    element.addEventListener('click', clickHead);

    var element = document.getElementById('head3');
    element.addEventListener('click', clickHead);

    var element = document.getElementById('head4');
    element.addEventListener('click', clickHead);
}

function body(){

}*/
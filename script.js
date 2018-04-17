/*----------------------------------------
@author: Roland UDVARLAKI (17439891)
Assignment 2 - CSY1018
All Rights Reserved - Credits given to their representative authors.
----------------------------------------*/

/* ----------VARIABLES---------- */
//Bet Variables
var betAmount = 0;
var funds = 100;
var left = 0;

var hor = 0;
var ver = -128;
var end = 1200;

/*var interval = [];
var clear = [];
var direction = [];

var mapWidth;
var mapHeight;
var line;*/

//Pop up notification to validate bet
function betValidation() {

  betAmount = document.getElementById("amount").value;

  if (isNaN(betAmount) || betAmount < 1 || betAmount > 100) {
    alert("The bet amount is not valid. Enter a number between 1-100!");
    console.log("The bet amount is not valid. Enter a number between 1-100!");
    } else {
        //alert("Insufficent funds!");
        console.log("Race Started");
        startRace();
    }
}

function timer(){

}





function startRace() {
    //betValidation();
    //document.getElementById("start").addEventListener("click", horseLeft);
    document.getElementById("start").addEventListener("click", horseAction);
    horseAction();
    interval = setInterval(horseAction, 5);
    //horseLeft();
}


function horseAction() {
    var horse1 = document.getElementById('horse1');
    var horse2 = document.getElementById('horse2');
    var horse3 = document.getElementById('horse3');
    var horse4 = document.getElementById('horse4');


    if(horse1.offsetTop == -128 && horse1.offsetLeft < 1200){
        horse1.className = "horse runRight"
        horse1.style.left = horse1.offsetLeft + 1 + 'px';
    }else if(horse1.offsetLeft ==1200 && horse1.offsetTop > 50){
        horse1.className = "horse runUp"
        horse1.style.top = horse1.offsetTop - 1 + 'px';
    }else if(horse1.offsetTop == 50 && horse1.offsetLeft > 150){
        horse1.className = "horse runLeft"
        horse1.style.left = horse1.offsetLeft - 1 + 'px';
    }

    /*if(horse1.offsetLeft < 1200 || horse1.offsetTop == -128){
        horse1.className = "horse runRight";
        horse1.style.left = horse1.offsetLeft + 1 + 'px';
        console.log("Go right");
    }else if(horse1.offsetLeft < 1200 || horse1.offsetTop > 50){
        horse1.className = "horse runUp";
        horse1.style.top = horse1.offsetTop - 1 + 'px';
        console.log("Go up");
    }else if(horse1.offsetTop == 50 || horse1.offsetLeft >= 300){
        horse1.className = "horse runLeft";
        var positionLeft = horse1.offsetLeft;
        horse1.style.left = horse1.positionLeft - 1 + 'px';
        positionLeft--;
        console.log("Go left");
    }*/
    





    /*if(horse2.offsetLeft < 1200){
        horse2.className = "horse runRight";
        horse2.style.left = horse2.offsetLeft + 50 + 'px';
    }else if(horse2.offsetLeft < 1200 || horse2.offsetTop < 600){
        horse2.className = "horse runUp";
        horse2.style.top = horse2.offsetTop - 50 + 'px';
    }else if(horse2.offsetLeft == 1200 && horse2.offsetTop == 500){
        horse2.className = "horse runLeft";
        horse2.style.left = horse2.offsetLeft - 50 + 'px';
    }

    if(horse3.offsetLeft < 1200){
        horse3.className = "horse runRight";
        horse3.style.left = horse3.offsetLeft + 50 + 'px';
    }else if(horse3.offsetLeft < 1200 || horse3.offsetTop < 600){
        horse3.className = "horse runUp";
        horse3.style.top = horse3.offsetTop - 50 + 'px';
    }else if(horse3.offsetLeft == 1200 && horse3.offsetTop == 500){
        horse3.className = "horse runLeft";
        horse3.style.left = horse3.offsetLeft - 50 + 'px';
    }

    if(horse4.offsetLeft < 1200){
        horse4.className = "horse runRight";
        horse4.style.left = horse4.offsetLeft + 50 + 'px';
    }else if(horse4.offsetLeft < 1200 || horse4.offsetTop < 600){
        horse4.className = "horse runUp";
        horse4.style.top = horse4.offsetTop - 50 + 'px';
    }else if(horse4.offsetLeft == 1200 && horse4.offsetTop == 500){
        horse4.className = "horse runLeft";
        horse4.style.left = horse4.offsetLeft - 50 + 'px';
    }*/


    //var horse = document.getElementById("horse");
    //var horse = document.getElementsByClassName("horse");
    //horse.className = "horse runRight";
    //var positionLeft = horse.offsetLeft;
    //horse.style.left = positionLeft + 1 + 'px';

    //var horse = document.getElementsByClassName("horse");
    //var speed = Math.ceil(Math.random() * 4 + 6);
    //var positionLeft = horse.offsetLeft;
    //var positionTop = horse.offsetTop;

    //horse.className = "horse runRight";
    //horse.style.left = left + 1 + "px";
    //left++;*/



  //var speed = Math.ceil(Math.random() * 4 + 6);
  //var positionTop = horse.offsetTop;
  //var positionLeft = horse.offsetLeft;
  //horse.style.left = positionLeft - 50+'px';
  //horse.style.left = window.innerWidth * 0.18 + 'px';

}

function myLoadFunction() {
  var startButton = document.getElementById("start");
  startButton.addEventListener('click', betValidation);
}

document.addEventListener('DOMContentLoaded', myLoadFunction);



































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
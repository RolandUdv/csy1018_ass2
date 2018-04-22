/*----------------------------------------
@author: Roland UDVARLAKI (17439891)
Assignment 2 - CSY1018
All Rights Reserved - Credits given to their representative authors.
----------------------------------------*/

/* ----------BET VALIDATION---------- */
/*function betValidation() {

  betAmount = document.getElementById("amount").value;

  if (isNaN(betAmount) || betAmount < 1 || betAmount > 100) {

    alert("The bet amount is not valid. Enter a number between 1-100!");

    console.log("The bet amount is not valid. Enter a number between 1-100!");
    }
    else
    {
        alert("Insufficent funds!");

        console.log("Race Started");
    }
}*/

/* ----------VARIABLES---------- */
var funds = 100;
var finishedHorseCount = 0;

/* ----------Start race---------- */
function startRace() {
    document.getElementById("start").addEventListener("click", horseAction);
}


/* ----------Funds methods---------- */
function raceFinished(horse)
{
    finishedHorseCount++;
    resultBoard = document.getElementsByClassName('result-horse'+finishedHorseCount)[0];     
    resultBoard.className = 'result-horse'+finishedHorseCount+' '+horse.id;

    if(finishedHorseCount == 1)
    {
        if( horse. id == document.getElementById("bethorse").value)
        {
            funds += document.getElementById("amount").value * 2;
        }
        else
        {
            funds -= document.getElementById("amount").value ; 
        }

        document.getElementById("funds").innerHTML = funds;

        console.log("Funds: "+funds);
    }
    if(finishedHorseCount == 4)
    {
        setUIActive(true);        
    }
}

/* ----------Clear leaderboard---------- */
function clearLeaderBoard()
{
  finishedHorseCount = 0;    
  for(i = 1; i<=4; i++)
  {
    resultBoard = document.getElementsByClassName('result-horse'+i)[0];     
    resultBoard.className = 'result-horse'+i;
  }   
}

function setUIActive(active)
{
    document.getElementById("start").disabled = !active;
    document.getElementById("amount").disabled = !active;
    document.getElementById("bethorse").disabled = !active;
}

/* ----------Set speed and horse position---------- */
function horseAction() {

    setUIActive(false);
    clearLeaderBoard();

    var horse1 = document.getElementById('horse1');
    horse1.position = {x: 20, y: 68 };    

    var horse2 = document.getElementById('horse2');
    horse2.position = {x: 20, y: 72 };

    var horse3 = document.getElementById('horse3');
    horse3.position = {x: 20, y: 76 };

    var horse4 = document.getElementById('horse4');
    horse4.position = {x: 20, y: 80 };

    horse1.interval = setInterval(function(){move(horse1, Math.random()*1)}, 20) //3
    horse2.interval = setInterval(function(){move(horse2, Math.random()*1)}, 20)
    horse3.interval = setInterval(function(){move(horse3, Math.random()*1)}, 20)
    horse4.interval = setInterval(function(){move(horse4, Math.random()*1)}, 20)
}

/* ----------Horse movement on track---------- */
function move(horse, speed)
{

    var winWidth = window.innerWidth;
    var winHeight = window.innerHeight;

    if(horse.position == null)
    {
        horse.position = {
            x: (horse.offsetLeft/winWidth)*100 ,
            y: (horse.offsetTop/winHeight)*100 
        };
    }

    horsePosition = horse.position;
 

    var horseOrient = horse.className.split(" ")[1];

    switch(horseOrient)
    {
        case "standRight":
        {
            horse.className = 'horse runRight';
            
        }
        break;
        case "runRight":
        {
        
                horsePosition.x+=speed;        
                setHorsePosition(horse, horsePosition);                
                if(horsePosition.x>=80)
                {
                    //if((Math.random() * 10) > (85-horsePosition.x))
                    {
                        horse.className = 'horse runUp';
                    }
                }            

                if(horse.finish != null)
                {                    
                    if(horse.finish == 1 && horsePosition.x >= 25)
                    {
                        raceFinished(horse);
                        horse.finish = 2;
                    }
                    if(horse.finish == 2 && horsePosition.x >= 30)
                    {
                        clearInterval(horse.interval);
                        horse.className = 'horse standRight';     
                        horse.finish = null;                                       
                    }
                }
            
        }
        break;
        case "runUp":
        {                                
                horsePosition.y-=speed;        
                setHorsePosition(horse, horsePosition);            
                if(horsePosition.y<=10)
                {
                    //if((Math.random() * 10) > 15-horsePosition.y)
                    {   
                        horse.className = 'horse runLeft';
                    }
            }
        }
        break;
        case "runLeft":
        {
        
                horsePosition.x-=speed;        
                setHorsePosition(horse, horsePosition);
                if(horsePosition.x<=10)
                {
                //    if((Math.random() * 10) > (horsePosition.x-5))
                    {
                        horse.className = 'horse runDown';
                    }
            }            
            
        }
        break;
        case "runDown":
        {                                
                horsePosition.y+=speed;        
                setHorsePosition(horse, horsePosition);            
                if(horsePosition.y>=70)
                {
                    //if((Math.random() * 10) > 75-horsePosition.y)
                    {   
                        horse.className = 'horse runRight';
                        horse.finish = 1;
                    }
            }
        }
        break;
    }

    

}

/* ----------Horse positioning---------- */
function setHorsePosition(horse, position)
{
    horse.style.left = position.x + 'vw';
    horse.style.top = position.y + 'vh';

}
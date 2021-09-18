var playing =false;
var score;
var timeremaining;
var action;  

var correctAnswer;
// if we click on the start/reset

function Show(id){
    document.getElementById(id).style.display="block";
}

function hide(Id){
    document.getElementById(Id).style.display = "none";
}

 function stopCountdown(){
  clearInterval(action);
 }

document.getElementById("startreset").onclick = function(){
    //if we r playing
    //reload page
    if(playing ==true)
    {
        location.reload();
    }
    // if we r not playing
    // set score to 0
    else{
        playing =true;
        score=0;
        document.getElementById("scorevalue").innerHTML=score;
        // show count down box
        timeremaining=90;
        Show("timeremaining");
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        hide("gameOver");
        document.getElementById("startreset").innerHTML ="Reset Game";
        startcountdowm();
        generateQA();

    }
} 

for(i=1;i<5;i++)
{
    document.getElementById("box" +i).onclick =function(){
        if(playing==true)
        {
            if(this.innerHTML == correctAnswer){
                score++;
                document.getElementById("scorevalue").innerHTML =score;
                hide("wrong");
                Show("correct");
                setTimeout(function(){
                    hide("correct");
                },1000)

                generateQA();
            }
            else{
                hide("correct");
                Show("wrong");
                score--;
                document.getElementById("scorevalue").innerHTML =score;
                setTimeout(function(){
                    hide("wrong");
                },1000)

            }
        }
    }
}





function startcountdowm(){
    action =  setInterval(function(){
        timeremaining -=1;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;

        if(timeremaining ==0)
        {
            stopCountdown();
            Show("gameOver");
            document.getElementById("gameOver").innerHTML =
            "<p>Game Over!</p><p>your score is " + score + ".</p>";
            hide("timeremaining");
            hide("coreect");
            hide("wrong");
            playing = false;
            document.getElementById("startreset").innerHTML ="Start Game";
        }

    }, 1000);
}

function generateQA(){
    var x= 1+ Math.round(99*Math.random());
    var y= 1+ Math.round(99*Math.random());

    correctAnswer =x*y;

    document.getElementById("question").innerHTML = x + "x" + y;
    var correctPosition = 1+ Math.round(3*Math.random());
    document.getElementById("box"+correctPosition).innerHTML = correctAnswer;

    var answers = [correctAnswer];
    for(i=1; i<5; i++){
    if(i != correctPosition) {
    var wrongAnswer;
        do{
    wrongAnswer = (1+ Math.round(99*Math.random()))*(1+ Math.round(99*Math.random()));
        }while(answers.indexOf(wrongAnswer)>-1)
        document.getElementById("box"+i).innerHTML = wrongAnswer;
        answers.push(wrongAnswer);

    }
    }
}



// reduse time by 1 sec in loop
// time left?
// yes->continue
// no->gameover
 // change button to reset
 // generate new q&a

 // if we click on answer box
 // if we r playing
 // correct?
 //yes
 //increase score
 // show correct box for 1 sec
 // genearte new q & a
 // no
 // show try again box for 1 sec
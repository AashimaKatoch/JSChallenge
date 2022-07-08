// Challenge 1 : your age in days 

function ageindays()
{
    var birthYear = prompt('What year were you born ..?');
    var ageindays = (2021-birthYear)*365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode(`You are ${ageindays} days old`);
    h1.setAttribute('id','ageindays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}


function reset()
{
    document.getElementById('ageindays').remove();
}

// challenge 2 : Cat Generator

function generateCat()
{
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src ="https://api.thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}

// Challenge 3 : Rock , paper , Scissor
function rpsGame(yourChoice)
{
    console.log(yourChoice);
    var humanChoice , botChoice;

    humanChoice= yourChoice.id;

    botChoice = numberTochoice(randTorpsInt());
    console.log('Computer Choice :',botChoice);

   results = decideWinner(humanChoice,botChoice);
   console.log(results);

   message = finalMessage(results);
   console.log(message);

rpsFrontEnd(yourChoice.id,botChoice,message);

 }


 function randTorpsInt()
 {
    return Math.floor(Math.random() * 3);
 }


 function numberTochoice(number)
 {
    return ['rock','paper','scissor'][number];
 }



 function decideWinner(yourChoice,computerChoice)
 {
    var rpsdatabase={
        'rock':{'rock':0.5,'paper':0,'scissor':1},
        'paper':{'rock':1,'paper':0.5,'scissor':0},
        'scissor':{'rock':0,'paper':1,'scissor':0.5}

    }

    var yourScore = rpsdatabase[yourChoice][computerChoice];
    var computerScore = rpsdatabase[computerChoice][yourChoice];

    return [yourScore,computerScore];
 }


 function finalMessage([yourScore,computerScore])
 {
    if(yourScore===0)
    {
        return {"message":"You've lost",'color':'red'}
    }

    else if(yourScore===0.5)
    {
        return {"message":"Game tied",'color':'yellow'}
    }

    else
    {
        return {"message":"You've won",'color':'green'}
    }
 }


 function rpsFrontEnd(humanImagChoice,botImageChoice,finalMessage)
 {
    var imageDB={
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src

    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var humandiv = document.createElement('div');
    var botdiv = document.createElement('div');
    var messagediv = document.createElement('div');

    humandiv.innerHTML = " <img src=' "+imageDB[humanImagChoice]+"' height=150 width = 150 style='box-shadow : 0px 10px 50px rgba(37,50,233,1);'>"


    messagediv.innerHTML ="<h1 style='color:"+finalMessage['color']+"; font-size:60px ; padding:30px ;  '>" + finalMessage['message']+"</h1>"

    botdiv.innerHTML = " <img src=' "+imageDB[botImageChoice]+"' height=150 width = 150 style='box-shadow : 0px 10px 50px rgba(243,38,24,1);'>"

    document.getElementById('flex-box-rps-div').appendChild(humandiv);
    document.getElementById('flex-box-rps-div').appendChild(messagediv);
    document.getElementById('flex-box-rps-div').appendChild(botdiv);

 }



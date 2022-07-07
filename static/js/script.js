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



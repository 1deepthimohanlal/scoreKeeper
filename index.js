const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const play = document.querySelector("#playTo");

let isGameOver = false;
let p1Score = 0;
let p2Score = 0;
b1.addEventListener('click',function()
{
    if(!isGameOver)
    {
        p1Score +=1;
    }
    if(p1Score===score)
    {
        isGameOver=true;
        document.getElementById("num1").classList.add("winner");
        document.getElementById("num2").classList.add("loser");
        b1.disable = true;
    }
    
    document.getElementById("num1").innerHTML=p1Score;
});

b2.addEventListener('click',function()
{
    if(!isGameOver)
    {
        p2Score +=1;
    }
    if(p2Score===score)
    {
        isGameOver=true;
        document.getElementById("num2").classList.add('winner');
        document.getElementById("num1").classList.add("loser");
        b2.disable = true;
    }
    
    document.getElementById("num2").innerHTML = p2Score;
});

play.addEventListener('change',function(){
    score = parseInt(this.value);
});

document.getElementById("reset").addEventListener('click',reset1);

function reset1()
{
    isGameOver = false;
    p1Score = 0;
    p1Score = 0;
    document.getElementById("num1").innerHTML=0;
    document.getElementById("num2").innerHTML=0;
    b1.disable = false;
    b2.disable = false;
    document.getElementById("num1").classList.remove('winner','loser');
    document.getElementById("num2").classList.remove('winner','loser');
}
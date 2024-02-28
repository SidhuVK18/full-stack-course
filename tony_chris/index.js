var a=Math.floor(Math.random()*6)+1;

var ri="dice" + a + ".png";

var im=document.querySelectorAll("img")[0];

im.setAttribute("src",ri);

var b =Math.floor(Math.random()*6)+1;

var rii="dice" + b +".png";

var ig=document.querySelectorAll("img")[1];

ig.setAttribute("src",rii);

if(a==b)
{
    document.querySelector("h1").innerHTML="draw!";
}
else if(a>b)
{
    document.querySelector("h1").innerHTML="player 1 wins🚩";
}
else
{
    document.querySelector("h1").innerHTML="player 2 wins🚩";
}

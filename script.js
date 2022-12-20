
var playerOne;
var playerTwo;
setTimeout(function() {

   playerOne = prompt("enter first player name");
   playerTwo = prompt("enter second player name");
   document.getElementById("play1").innerHTML = playerOne;
document.getElementById("play2").innerHTML = playerTwo;

document.getElementById("plays1").innerHTML = playerOne;
document.getElementById("plays2").innerHTML = playerTwo;
}, 2000);

var score1 = 0;

var score2 = 0;

var score3 = 0;



function rollDice()
{
  var Number1 = Math.floor(Math.random() * 6) + 1;
  var Source1 = "images/dice" + Number1 + ".png";
  document.querySelectorAll("img")[0].setAttribute("src", Source1);


  var Number2 = Math.floor(Math.random() * 6) + 1;
  var Source2 = "images/dice" + Number2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", Source2);


if (Number1>Number2)
{
  document.querySelector("h1").innerHTML = playerOne + " You Won";
  score1++;

  document.getElementById("score1").innerHTML = score1;

}
else if (Number1<Number2)
 {
  document.querySelector("h1").innerHTML = playerTwo + " You Won";
  score2++;
  document.getElementById("score2").innerHTML = score2;

}
else
 {
  document.querySelector("h1").innerHTML = " Draw!";
  score3++;
  document.getElementById("score3").innerHTML = score3;

}
}
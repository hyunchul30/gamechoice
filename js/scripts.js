$(document).ready(function(){
});



function rollDice() {
var play1=Math.floor(Math.random() * 6) +1;
var play2=Math.floor(Math.random() * 6) +1;
var dicetotal= play1+play2;

$("#dice1").text(play1)
$("#dice2").text(play2);

}

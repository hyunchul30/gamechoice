$(document).ready(function(){
  $("#cg").click(function(){
change();
  })
});



function rollDice() {
var play1=Math.floor(Math.random() * 6) +1;
var play2=Math.floor(Math.random() * 6) +1;
var play3=Math.floor(Math.random() * 6) +1;
var dicetotal= play1+play2;

$("#dice1").text(play1)
$("#dice2").text(play2)
$("#dice3").text(play3)
}

var play1=1;
var play2=2;
var play3=3;


var currentplay = play1;

var change= function() {
alert("change");
if (currentplay===play1){
  currentplay=play2
  }
  if (currentplay===play2){
    currentplay=play3
  }
  else {
    currentplay =play1
    }



console.log(currentplay);

}

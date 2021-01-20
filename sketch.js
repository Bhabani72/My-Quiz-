var canvas,gameState = 0;
var contestantCount;
var allcontestant;
var database;
var question, contestant, quiz;

function setup(){
  canvas = createCanvas(1400,700);
  database = firebase.database();
  quiz = new game();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("yellow")
  if(contestantCount===4){
    quiz.update(1);
  }
  if(gameState===1){
    clear();
    quiz.play();
  }
}

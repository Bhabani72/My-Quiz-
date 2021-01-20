class game {
    constructor(){
      this.form = new Forms();
     
    }
    
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
     
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        contestant = new Contestants();
        var contestantCountRef = await database.ref('contestantCount').once("value");
        if(contestantCountRef.exists()){
            contestantCount = contestantCountRef.val();
 contestant.getCount();}
    
  this.form.display();
      }
    }
  
    play(){
      this.form.hide();
     background("cyan")
      textSize(30);
      text("Result Of The Quiz",200,50);
      contestant.getcontestantInfo();
  
      if(allcontestant!== undefined){
        var display_position = 230; 
        for(var plr in allcontestant){
          var Correctanswer = "2";
          if(Correctanswer===allcontestant[plr].answer)
          fill("green");
          else
          fill("red")
        display_position += 20;
        textSize(15);
        text(allcontestant[plr].name+": "+allcontestant[plr].answer,120,display_position)
      }
    }
  }
  }
  
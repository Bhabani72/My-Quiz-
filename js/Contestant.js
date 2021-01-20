class Contestants {
    constructor(){
      this.answer = 0;
      this.index = null;
      this.name = null;
    }
  
    getCount(){
      var contestantCountRef = database.ref('contestantCount');
      contestantCountRef.on("value",function(data){
        contestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }
  
    update(){
      var contestantIndex = "contestant" + this.index;
      database.ref(contestantIndex).set({
        name:this.name,
        answer:this.answer
      });
    }
    static getcontestantInfo(){
  var contestantInfoRef = database.ref('contestant');
  contestantInfoRef.on("value",(data)=>{
  allcontestant = data.val();
  })
    }
  }
  
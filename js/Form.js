class Forms {
    constructor() {
      this.title = createElement('h2')
      this.Question = createElement('h2')
      this.Option1 = createElement('h2')
      this.Option2 = createElement('h2')
      this.Option3 = createElement('h2')
      this.Option4 = createElement('h2')
      this.input = createInput("Name");
      this.answer = createInput("Select The Correct Option");
      this.button = createButton('Submit')
      
    }
  
  hide(){
      this.title.hide();
      this.Question.hide();
      this.Option1.hide();
      this.Option2.hide();
      this.Option3.hide();
      this.Option4.hide();
  this.button.hide();
  this.input.hide();
  this.answer.hide();
  }
    display(){

      this.title.html("Quiz Game");
      this.title.position(350, 20);

      this.Question.html("Question - 'What Starts and Ends with letter 'E'and has only one letter '");
      this.Question.position(150, 80);

      this.Option1.html("Everyone");
      this.Option1.position(150, 120);

       this.Option2.html("Envelope");
      this.Option2.position(150, 160);

      this.Option3.html("Example");
      this.Option3.position(150, 200);

      this.Option4.html("Estimate");
      this.Option4.position(150, 240);
      
      this.input.position(120, 360);
      this.answer.position(280, 360);
      this.button.position(150, 460);
  
      this.button.mousePressed(()=>{
        this.title.hide();
        this.Option1.hide();
      this.Option2.hide();
      this.Option3.hide();
      this.Option4.hide();
        this.input.hide();
        this.answer.hide();
         this.button.hide();
  
       contestant.name = this.input.value();
       contestant.answer = this.answer.value();
       contestant.index= contestantCount
       contestantCount+=1;
       contestant.update()
       contestant.updateCount( contestantCount);
      });
  
    }
  }
  
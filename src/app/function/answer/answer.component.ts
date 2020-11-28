import { Component, OnInit } from '@angular/core';
import { Answermodel } from 'src/app/answermodel';
import { ActivatedRoute } from '@angular/router';
import { AnswerService } from 'src/app/answer.service';
import { QuestionService } from 'src/app/question.service';
import { Questionmodel } from 'src/app/questionmodel';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  questionmodel=new Questionmodel();
  showSuccess:boolean=false;
  answermodel= new Answermodel();
  showError:boolean = false;
  constructor(private route:ActivatedRoute, private answerService:AnswerService,private questionService: QuestionService) { }

  ngOnInit(): void { 
    this.readQuestionId();
  }
  readQuestionId(){
    let id = this.route.snapshot.params.id;
    this.answermodel.questionseq=id;
    this.questionService.getQuestionById(id)
    .subscribe(data => {
      if(data!= null){
        console.log("Cloned successfully");
        this.questionmodel=data;
      }else{
        console.log("Some error");
      }
      });
  }
  onSubmitAnswer(){
    console.log(this.answermodel);
    this.answerService.onSubmitAnswer(this.answermodel)
    .subscribe(data => {
      if(data!= null){
        console.log("Cloned successfully");
        this.showSuccess=true;
      }else{
        console.log("Some error");
        this.showError=true;
      }
      });
    
    }

}

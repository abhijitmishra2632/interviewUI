import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnswerService } from 'src/app/answer.service';
import { Answermodel } from 'src/app/answermodel';

@Component({
  selector: 'app-viewanswer',
  templateUrl: './viewanswer.component.html',
  styleUrls: ['./viewanswer.component.css']
})
export class ViewanswerComponent implements OnInit {

  answermodel= new Answermodel();
  answermodels:any;
  constructor(private route:ActivatedRoute, private answerService:AnswerService) { }

  ngOnInit(): void {
    this.readQuestionId();
  }
  readQuestionId(){
    let id = this.route.snapshot.params.id;
    this.answermodel.questionseq=id;
    this.answerService.getAllAnswers(this.answermodel.questionseq)
    .subscribe(data => {
      if(data!= null){
        console.log(data);
        this.answermodels=data;
      }else{
        console.log("Some error");
      }
      });
  }

}

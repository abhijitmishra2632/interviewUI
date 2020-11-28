import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Questionmodel } from 'src/app/questionmodel';
import { QuestionService } from 'src/app/question.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  pageActive:boolean=true;
  questionmodel=new Questionmodel();
  priorityList = ['Low','Medium','High'];
  constructor(private route:ActivatedRoute,private questionService: QuestionService) { }

  ngOnInit(): void { 
    this.readQuestionId();
  }
  readQuestionId(){
    let id = this.route.snapshot.params.id;
    this.questionmodel.questionseq=id;
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
  onUpdateQuestion(){
    this.questionService.onUpdateQuestion(this.questionmodel)
    .subscribe(data => {
      if(data!= null){
        console.log("Updated successfully");
      }else{
        console.log("Some error");
      }
      });
  }

}

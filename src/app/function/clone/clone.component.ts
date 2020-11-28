import { Component, OnInit } from '@angular/core';
import { Questionmodel } from 'src/app/questionmodel';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/question.service';

@Component({
  selector: 'app-clone',
  templateUrl: './clone.component.html',
  styleUrls: ['./clone.component.css']
})
export class CloneComponent implements OnInit {

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
        this.questionmodel=data;
      }else{
        console.log("Some error");
      }
      });
  }
  onCloneQuestion(){
    this.questionService.onCloneQuestion(this.questionmodel)
    .subscribe(data => {
      if(data!= null){
        console.log("Cloned successfully");
      }else{
        console.log("Some error");
      }
      });
  }

}

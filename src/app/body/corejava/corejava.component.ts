import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/question.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-corejava',
  templateUrl: './corejava.component.html',
  styleUrls: ['./corejava.component.css']
})
export class CorejavaComponent implements OnInit {
  questionList:any;
  subject:String;
  constructor(private questionService: QuestionService, private router:Router) { }
  coreList =['basics','OOPs','String','Exception Handling','Collection','Map','Thread','Synchronization','Concurrency','Java8','Serialization','Garbage Collection',];
  ngOnInit(): void {
    this.questionService.getAllQuestions('Core Java').subscribe(data => {
      this.questionList=data;
    });
  }
  onFilterSubject(){
    console.log(this.subject);
  }
  onProvideAnswer(model){
    this.router.navigate(['/answer',model.questionseq]);
  }
  onSeeAnswer(model){
    this.router.navigate(['/vanswer',model.questionseq]);
  }
  onClone(model){
    this.router.navigate(['/clone',model.questionseq]);
  }
  onUpdate(model){
    this.router.navigate(['/update',model.questionseq]);
  }
  onDelete(model){
    this.router.navigate(['/delete',model.questionseq]);
  }

}

import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/question.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dsandalgo',
  templateUrl: './dsandalgo.component.html',
  styleUrls: ['./dsandalgo.component.css']
})
export class DsandalgoComponent implements OnInit {

  questionList:any;
  constructor(private questionService: QuestionService, private router:Router) { }

  ngOnInit(): void {
    this.questionService.getAllQuestions('DS and Algorithm').subscribe(data => {
      this.questionList=data;
    });
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

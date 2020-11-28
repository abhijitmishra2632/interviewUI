import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/question.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-devop',
  templateUrl: './devop.component.html',
  styleUrls: ['./devop.component.css']
})
export class DevopComponent implements OnInit {

  questionList:any;
  constructor(private questionService: QuestionService, private router:Router) { }

  ngOnInit(): void {
    this.questionService.getAllQuestions('Devops').subscribe(data => {
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

import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/question.service';

@Component({
  selector: 'app-dsandalgo',
  templateUrl: './dsandalgo.component.html',
  styleUrls: ['./dsandalgo.component.css']
})
export class DsandalgoComponent implements OnInit {

  questionList:any;
  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.questionService.getAllQuestions('DS and Algorithm').subscribe(data => {
      this.questionList=data;
    });
  }

}

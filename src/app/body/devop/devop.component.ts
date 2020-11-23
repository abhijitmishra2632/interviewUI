import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/question.service';

@Component({
  selector: 'app-devop',
  templateUrl: './devop.component.html',
  styleUrls: ['./devop.component.css']
})
export class DevopComponent implements OnInit {

  questionList:any;
  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.questionService.getAllQuestions('Devops').subscribe(data => {
      this.questionList=data;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/question.service';

@Component({
  selector: 'app-messageq',
  templateUrl: './messageq.component.html',
  styleUrls: ['./messageq.component.css']
})
export class MessageqComponent implements OnInit {

  questionList:any;
  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.questionService.getAllQuestions('messageq').subscribe(data => {
      this.questionList=data;
    });
  }

}

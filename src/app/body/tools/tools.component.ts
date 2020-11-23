import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/question.service';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {

  questionList:any;
  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.questionService.getAllQuestions('Tools').subscribe(data => {
      this.questionList=data;
    });
  }

}

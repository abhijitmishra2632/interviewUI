import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/question.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  questionList:any;
  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.questionService.getAllQuestions('Project').subscribe(data => {
      this.questionList=data;
    });
  }

}

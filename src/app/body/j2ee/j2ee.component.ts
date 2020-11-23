import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/question.service';

@Component({
  selector: 'app-j2ee',
  templateUrl: './j2ee.component.html',
  styleUrls: ['./j2ee.component.css']
})
export class J2eeComponent implements OnInit {

  questionList:any;
  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.questionService.getAllQuestions('J2EE').subscribe(data => {
      this.questionList=data;
    });
  }

}

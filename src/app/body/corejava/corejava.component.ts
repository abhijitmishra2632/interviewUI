import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/question.service';

@Component({
  selector: 'app-corejava',
  templateUrl: './corejava.component.html',
  styleUrls: ['./corejava.component.css']
})
export class CorejavaComponent implements OnInit {
  questionList:any;
  subject:String;
  constructor(private questionService: QuestionService) { }
  coreList =['OOPs','String','Exception Handling','Collection','Map','Thread','Concurrency','Java8','Serialization'];
  
  ngOnInit(): void {
    this.questionService.getAllQuestions('Core Java').subscribe(data => {
      this.questionList=data;
    });
  }
  onFilterSubject(){
    console.log(this.subject);
  }

}

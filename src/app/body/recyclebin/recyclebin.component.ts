import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/question.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recyclebin',
  templateUrl: './recyclebin.component.html',
  styleUrls: ['./recyclebin.component.css']
})
export class RecyclebinComponent implements OnInit {
  questionList:any;
  constructor(private questionService: QuestionService,private router:Router) { }

  ngOnInit(): void {
    this.questionService.getAllDeletedQuestions().subscribe(data => {
      this.questionList=data;
    });
  }
  onDeleteReverse(model){
    this.router.navigate(['/undo',model.questionseq]);
  }
  onDeletePermanently(model){
    this.router.navigate(['/pdelete',model.questionseq]);
  }

}

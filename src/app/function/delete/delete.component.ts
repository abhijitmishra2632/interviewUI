import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/question.service';
import { Questionmodel } from 'src/app/questionmodel';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  questionmodel=new Questionmodel();
  constructor(private route:ActivatedRoute,private questionService: QuestionService) { }

  ngOnInit(): void { 
    console.log("deleting id: ");
    this.readQuestionId();
  }
  readQuestionId(){
    let id = this.route.snapshot.params.id;
    console.log("deleting id: "+id);
    this.questionmodel.questionseq=id;
    console.log("deleting id: "+id);
    this.questionService.deleteQuestionById(id)
    .subscribe(data => {
        console.log("Deleted successfully");
      });
  }

}

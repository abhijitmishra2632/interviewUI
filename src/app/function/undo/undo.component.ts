import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/question.service';

@Component({
  selector: 'app-undo',
  templateUrl: './undo.component.html',
  styleUrls: ['./undo.component.css']
})
export class UndoComponent implements OnInit {

  constructor(private route:ActivatedRoute,private questionService: QuestionService) { }

  ngOnInit(): void {
    console.log("undo id: ");
    this.readQuestionId();
  }
  readQuestionId(){
    let id = this.route.snapshot.params.id;
    console.log("undo id: "+id);
    this.questionService.undoQuestionById(id)
    .subscribe(data => {
        console.log("Undo successfully");
      });
  }

}

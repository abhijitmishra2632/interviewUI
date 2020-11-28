import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/question.service';

@Component({
  selector: 'app-deletepermanently',
  templateUrl: './deletepermanently.component.html',
  styleUrls: ['./deletepermanently.component.css']
})
export class DeletepermanentlyComponent implements OnInit {

  constructor(private route:ActivatedRoute,private questionService: QuestionService) { }

  ngOnInit(): void {
    this.readQuestionId();
  }
  readQuestionId(){
    let id = this.route.snapshot.params.id;
    console.log("undo id: "+id);
    this.questionService.onDeletepermanently(id)
    .subscribe(data => {
        console.log("Permanently Deleted successfully");
      });
  }

}

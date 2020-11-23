import { Injectable } from '@angular/core';
import { Questionmodel } from './questionmodel';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  public getAllQuestions(arg0: string) {
    return this.httpClientModule.get('http://localhost:8095/question/technology/'+arg0 );
  }
  
  constructor(private httpClientModule:HttpClient) { }

  public addQuestion(questionmodel: Questionmodel) {
    return this.httpClientModule.post('http://localhost:8095/question',questionmodel );
  }
}

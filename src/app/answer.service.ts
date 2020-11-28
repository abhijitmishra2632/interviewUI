import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Answermodel } from './answermodel';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  
  constructor(private httpClient: HttpClient) { }
  uri:string=`http://localhost:8099/answer/`;
  public onSubmitAnswer(answermodel:Answermodel) {
    return this.httpClient.post<Answermodel>(this.uri,answermodel);
  }
  public getAllAnswers(questionseq: number) {
    return this.httpClient.get<Answermodel>(this.uri+questionseq);
  }
}

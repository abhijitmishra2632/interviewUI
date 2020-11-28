import { Injectable } from '@angular/core';
import { Questionmodel } from './questionmodel';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  public onDeletepermanently(id: any) {
    return this.httpClientModule.delete(this.uri+"permanent/"+id);
  }
  public undoQuestionById(id: any) {
    return this.httpClientModule.get(this.uri+"undo/"+id );
  }
  public getAllDeletedQuestions() {
    return this.httpClientModule.get<Questionmodel>(this.uri+"deleted");
  }
  public onCloneQuestion(questionmodel: Questionmodel) {
    return this.httpClientModule.post(this.uri+"clone/",questionmodel );
  }
  public deleteQuestionById(id: any) {
    return this.httpClientModule.delete(this.uri+id);
  }
  public onUpdateQuestion(questionmodel: Questionmodel) {
    return this.httpClientModule.put(this.uri+questionmodel.questionseq,questionmodel );
  }
  uri:string='http://localhost:8095/question/';
  public getQuestionById(id: number) {
    return this.httpClientModule.get<Questionmodel>(this.uri+id);
  }
  public getAllQuestions(arg0: string) {
    return this.httpClientModule.get(this.uri+'/technology/'+arg0 );
  }
  
  constructor(private httpClientModule:HttpClient) { }

  public addQuestion(questionmodel: Questionmodel) {
    return this.httpClientModule.post(this.uri,questionmodel );
  }
}

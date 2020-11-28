import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/question.service';
import { Questionmodel } from 'src/app/questionmodel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pageActive:boolean=true;
  techActive:boolean=false;
  questionmodel:Questionmodel = new Questionmodel();;
  priorityList = ['Low','Medium','High'];
  technologyList = ['Project', 'Core Java', 'J2EE', 'Framework', 'Tools','DB','UI','DS and Algorithm','Devops','Testing','Scripting','MessagingQ'];
  coreList =['basics','OOPs','String','Exception Handling','Collection','Map','Thread','Synchronization','Concurrency','Java8','Serialization','Garbage Collection',];
  J2EEList = ['Servlet','JDBC','Design Pattern'];
  frameworkList = ['Spring Core','Spring MVC','Spring Security','Spring Boot','Hibernate','Rest','Micro Services'];
  toolsList = ['Maven/Gradle','GIT/SVN','Jenkins/Hudson','Checkmarx'];
  dbList =['MySQL','MongoDB'];
  uiList =['Angular'];
  testingList=['JUnit','Mockito','TestNG'];
  constructor(private questionService:QuestionService) { }

  ngOnInit(): void {
  }
  onSubmitQuestion(){
    this.questionService.addQuestion(this.questionmodel).subscribe(data => { 
      if(data !=null){
        console.log(data);
      }else{
        console.log(data);
      }
      
    });
  }

}

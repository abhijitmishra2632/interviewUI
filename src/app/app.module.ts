import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './header/home/home.component';
import { HeaderComponent } from './header/header.component';
import { ProjectComponent } from './body/project/project.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CorejavaComponent } from './body/corejava/corejava.component';
import { J2eeComponent } from './body/j2ee/j2ee.component';
import { FrameworkComponent } from './body/framework/framework.component';
import { ToolsComponent } from './body/tools/tools.component';
import { DbComponent } from './body/db/db.component';
import { DsandalgoComponent } from './body/dsandalgo/dsandalgo.component';
import { DevopComponent } from './body/devop/devop.component';
import { TestingComponent } from './body/testing/testing.component';
import { ScriptingComponent } from './body/scripting/scripting.component';
import { MessageqComponent } from './body/messageq/messageq.component';
import { CloneComponent } from './function/clone/clone.component';
import { UpdateComponent } from './function/update/update.component';
import { DeleteComponent } from './function/delete/delete.component';
import { AnswerComponent } from './function/answer/answer.component';
import { ViewanswerComponent } from './function/viewanswer/viewanswer.component';
import { RecyclebinComponent } from './body/recyclebin/recyclebin.component';
import { UndoComponent } from './function/undo/undo.component';
import { DeletepermanentlyComponent } from './function/deletepermanently/deletepermanently.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProjectComponent,
    CorejavaComponent,
    J2eeComponent,
    FrameworkComponent,
    ToolsComponent,
    DbComponent,
    DsandalgoComponent,
    DevopComponent,
    TestingComponent,
    ScriptingComponent,
    MessageqComponent,
    CloneComponent,
    UpdateComponent,
    DeleteComponent,
    AnswerComponent,
    ViewanswerComponent,
    RecyclebinComponent,
    UndoComponent,
    DeletepermanentlyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

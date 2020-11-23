import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CorejavaComponent } from './body/corejava/corejava.component';
import { DbComponent } from './body/db/db.component';
import { DevopComponent } from './body/devop/devop.component';
import { DsandalgoComponent } from './body/dsandalgo/dsandalgo.component';
import { FrameworkComponent } from './body/framework/framework.component';
import { J2eeComponent } from './body/j2ee/j2ee.component';
import { MessageqComponent } from './body/messageq/messageq.component';
import { ProjectComponent } from './body/project/project.component';
import { ScriptingComponent } from './body/scripting/scripting.component';
import { TestingComponent } from './body/testing/testing.component';
import { ToolsComponent } from './body/tools/tools.component';
import { HomeComponent } from './header/home/home.component';

const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "home"},
  {path: "home", component: HomeComponent},
  {path: "project", component: ProjectComponent},
  {path: "corejava", component: CorejavaComponent},
  {path: "j2ee", component: J2eeComponent},
  {path: "framework", component: FrameworkComponent},
  {path: "tools", component: ToolsComponent},
  {path: "db", component: DbComponent},
  {path: "dsandalgo", component: DsandalgoComponent},
  {path: "devop", component: DevopComponent},
  {path: "testing", component: TestingComponent},
  {path: "scripting", component: ScriptingComponent},
  {path: "messageq", component: MessageqComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

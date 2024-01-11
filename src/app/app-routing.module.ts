import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreatetaskComponent } from './components/createtask/createtask.component';
import { DeletetaskComponent } from './components/deletetask/deletetask.component';
import { SearchtaskComponent } from './components/searchtask/searchtask.component';

const routes: Routes = [
  {path:'',component:CreatetaskComponent},
  {path:'create',component:CreatetaskComponent},
  {path:'search',component:SearchtaskComponent},
  {path:'delete',component:DeletetaskComponent}
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

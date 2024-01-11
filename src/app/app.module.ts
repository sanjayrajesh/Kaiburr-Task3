import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatetaskComponent } from './components/createtask/createtask.component';
import { SearchtaskComponent } from './components/searchtask/searchtask.component';
import { DeletetaskComponent } from './components/deletetask/deletetask.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatetaskComponent,
    SearchtaskComponent,
    DeletetaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

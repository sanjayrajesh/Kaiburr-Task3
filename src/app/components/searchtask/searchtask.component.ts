import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Task } from 'src/app/models/task.model';
import { DeletetaskService } from 'src/app/services/deletetask.service';
import { SearchtaskService } from 'src/app/services/searchtask.service';

@Component({
  selector: 'app-searchtask',
  templateUrl: './searchtask.component.html',
  styleUrls: ['./searchtask.component.css']
})
export class SearchtaskComponent implements OnInit {

  static optionList: Map<number, string> = new Map<number, string>([
    [1, 'Show all created Tasks'],
    [2, 'Search Task by ID'],
    [3, 'Search Task by task name'],
    [4, 'Search Task by Assignee'],
  ]);

  taskForm: FormGroup;
  returnResponse: string;
  error_message: string;
  listResult: Task[];

  constructor(private formBuilder: FormBuilder, private searchtaskService: SearchtaskService, private deletetaskService: DeletetaskService) { }

  ngOnInit(): void {
    this.taskForm = this.formBuilder.group({
      tasksList: ['', Validators.required],
      name: [''],
      id: [''],
      assignee: [''],
      numList: [''],
    });

    this.taskForm.get('tasksList').patchValue(Array.from(SearchtaskComponent.optionList.keys())[0]);
    this.listResult = [];
  }

  getMapEntries(): [number, string][] {
    return Array.from(SearchtaskComponent.optionList.entries());
  }

  showOptions(opt: number): boolean {
    if (this.taskForm.value.tasksList == opt) {
      //this.listResult = [];
      //this.returnResponse = "";
      //this.error_message = "";
      return true;
    } else
      return false;
  }

  searchTask() {
    console.log("Printing: " + this.taskForm.value.tasksList);
    if (this.taskForm.value.tasksList == 1) {
      this.searchtaskService.listAllTasks().subscribe(
        tasks => {
          //console.log(tasks);
          this.listResult = tasks;
          this.error_message = "";
          this.returnResponse = "All Task fetched Successfully";
        },
        (error: HttpErrorResponse) => {
          console.error('Error in Listing All task:', error.error);
          console.log('Error Response Status:', error.status, error.statusText);
          this.returnResponse = "";
          this.error_message = error.error.message;
          this.listResult = [];
        }
      );
    } else if (this.taskForm.value.tasksList == 2) {
      if (this.taskForm.value.id == '') {
        this.returnResponse = "";
        this.error_message = "Task ID is NOT given, Please input the Task ID";
        return;
      }
      this.searchtaskService.searchTaskById(this.taskForm.value.id).subscribe(
        task => {
          console.log(task);
          this.listResult = [task];
          //console.log("Testing "+JSON.stringify(this.listResult));
          this.error_message = "";
          this.returnResponse = "Task fetched Successfully";
        },
        (error: HttpErrorResponse) => {
          console.error('Error in searching task by ID:', error.error);
          console.log('Error Response Status:', error.status, error.statusText);
          this.returnResponse = "";
          this.error_message = error.error.message;
          this.listResult = [];
        }
      );
    } else if (this.taskForm.value.tasksList == 3) {
      this.searchtaskService.searchTaskByName(this.taskForm.value.name).subscribe(
        tasks => {
          console.log(tasks);
          this.listResult = tasks;
          this.error_message = "";
          this.returnResponse = "Task fetched Successfully";
        },
        (error: HttpErrorResponse) => {
          console.error('Error in searching task by Name:', error.error);
          console.log('Error Response Status:', error.status, error.statusText);
          this.returnResponse = "";
          this.error_message = error.error.message;
          this.listResult = [];
        }
      );
    } else {
      this.searchtaskService.searchTaskByAssignee(this.taskForm.value.assignee,this.taskForm.value.numList).subscribe(
        tasks => {
          console.log(tasks);
          this.listResult = tasks;
          this.error_message = "";
          this.returnResponse = "Task fetched Successfully";
        },
        (error: HttpErrorResponse) => {
          console.error('Error in searching task by Assignee:', error.error);
          console.log('Error Response Status:', error.status, error.statusText);
          this.returnResponse = "";
          this.error_message = error.error.message;
          this.listResult = [];
        }
      );
    }
  }

  onDelete(id: string){
    //listResult
    console.log("Inside onDelete");
    this.deletetaskService.deleteTaskObservable(id).subscribe(
      (response: string) => {
        console.log('Success:', response);
        this.error_message = "";
        this.returnResponse = response;
      },
      (error: HttpErrorResponse) => {
        console.error('Error during task deletion:', error.error);
        console.log('Error Response Status:', error.status, error.statusText);
        this.returnResponse = "";
        this.error_message = error.error;
      }
    );
  }
}

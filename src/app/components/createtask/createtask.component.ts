import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { Task } from 'src/app/models/task.model';
import { CreatetaskService } from 'src/app/services/createtask.service';

@Component({
  selector: 'app-createtask',
  templateUrl: './createtask.component.html',
  styleUrls: ['./createtask.component.css']
})
export class CreatetaskComponent implements OnInit {

  taskForm: FormGroup;
  returnResponse: string;
  error_message: string;

  constructor(private formBuilder: FormBuilder, private createtaskService: CreatetaskService) { }

  ngOnInit(): void {
    this.taskForm = this.formBuilder.group({
      name: ['', Validators.required],
      id: ['', Validators.required],
      assignee: ['', Validators.required],
      project: ['', Validators.required],
      startTime: ['', Validators.required],
    });
  }

  createTask() {
    if (this.taskForm.invalid) {
      this.error_message = 'Please fill out all the fields.';
      return;
    }

    this.createtaskService.createTaskObservable(
      new Task(this.taskForm.value.name, this.taskForm.value.id, this.taskForm.value.assignee,
        this.taskForm.value.project, this.taskForm.value.startTime))
      .subscribe(
        (response: string) => {
          console.log('Success:', response);
          this.error_message = "";
          this.returnResponse = response;
        },
        (error: HttpErrorResponse) => {
          console.error('Error during task creation:', error.error);
          console.log('Error Response Status:', error.status, error.statusText);
          this.returnResponse = "";
          this.error_message = error.error;
        }
      );
  }
}

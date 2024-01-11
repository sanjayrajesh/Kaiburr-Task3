import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DeletetaskService } from 'src/app/services/deletetask.service';

@Component({
  selector: 'app-deletetask',
  templateUrl: './deletetask.component.html',
  styleUrls: ['./deletetask.component.css']
})
export class DeletetaskComponent implements OnInit {

  taskForm: FormGroup;
  returnResponse: string;
  error_message: string;

  constructor(private formBuilder: FormBuilder, private deletetaskService: DeletetaskService) { }

  ngOnInit(): void {
    this.taskForm = this.formBuilder.group({
      id: ['', Validators.required]
    });
  }

  deleteTask(){
    this.deletetaskService.deleteTaskObservable(this.taskForm.value.id).subscribe(
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

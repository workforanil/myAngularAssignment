import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task-change',
  templateUrl: './task-change.component.html',
  styleUrls: ['./task-change.component.css']
})
export class TaskChangeComponent implements OnInit {
  selected : number = 1;
  taskForm: FormGroup = new FormGroup({
    'newTask' : new FormControl(this.data.task.taskTitle),
    'taskDescription' : new FormControl(this.data.task.taskDescription),
    'taskPriority' : new FormControl(this.data.task.priority+""),
  });
  constructor(@Inject(MAT_DIALOG_DATA) public data : any, public tasks : TasksService ) { }

  ngOnInit(): void {
  }
  
  onEdit(){
    if(this.data.editStatus === "todo"){
      this.tasks.todoList.forEach((e)=>{
        if(e.taskId === this.data.task.taskId){
          e.taskTitle = this.taskForm.value.newTask;
          e.taskDescription = this.taskForm.value.taskDescription;
          e.priority = this.taskForm.value.taskPriority;
        }
      })
    }else{
      this.tasks.processList.forEach((e)=>{
        if(e.taskId === this.data.task.taskId){
          e.taskTitle = this.taskForm.value.newTask;
          e.taskDescription = this.taskForm.value.taskDescription;
          e.priority = this.taskForm.value.taskPriority;
        }
      })
    }
    this.tasks.todoList.sort((a,b)=>a.priority-b.priority);
  }
}

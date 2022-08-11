import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-newtask-modal',
  templateUrl: './newtask-modal.component.html',
  styleUrls: ['./newtask-modal.component.css']
})
export class NewtaskModalComponent implements OnInit {
  selected : number = 1;
  newTaskform !: FormGroup; 

  taskForm: FormGroup = new FormGroup({
    'newTask' : new FormControl(null),
    'taskDescription' : new FormControl(null),
    'taskPriority' : new FormControl('1')
  });
  constructor(public tasks : TasksService) { }

  ngOnInit(): void {
    this.taskForm = new FormGroup({
      'newTask' : new FormControl(null),
      'taskDescription' : new FormControl(null),
      'taskPriority' : new FormControl('1')
    });
  }
  onSubmit(){
    // console.log(this.taskForm);
    let assignId = 0;
    this.tasks.todoList.forEach((e)=>{
      if(e.taskId > assignId){
        assignId = e.taskId;
      }
    })
    const myNewTask = {
      taskId : Date.now(),
      taskTitle : this.taskForm.value.newTask,
      taskDescription: this.taskForm.value.taskDescription,
      status : "new",
      createDate : "",
      completionDate : "",
      priority : this.taskForm.value.taskPriority
    }
    this.tasks.todoList.push(myNewTask);
    console.log(myNewTask);
    this.tasks.todoList.sort((a,b)=>a.priority-b.priority);
  }
}

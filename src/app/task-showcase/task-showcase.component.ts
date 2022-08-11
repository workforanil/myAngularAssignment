import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TasksService } from '../tasks.service';
import {MatDialog} from '@angular/material/dialog';
import {MatMenuTrigger} from '@angular/material/menu';
import { TaskChangeComponent } from '../task-change/task-change.component';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';

@Component({
  selector: 'app-task-showcase',
  templateUrl: './task-showcase.component.html',
  styleUrls: ['./task-showcase.component.css']
})
export class TaskShowcaseComponent implements OnInit {
  @ViewChild('menuTrigger') menuTrigger !: MatMenuTrigger;
  todoList : {taskId : number,taskTitle:string, taskDescription: string, status: string, createDate: string, completionDate:string,priority:number}[] = [];
  processList : {taskId : number,taskTitle:string, taskDescription: string, status: string, createDate: string, completionDate:string,priority:number}[] = [];
  doneList : {taskId : number,taskTitle:string, taskDescription: string, status: string, createDate: string, completionDate:string,priority:number}[] = [];
  
  constructor(public tasks : TasksService,public dialog: MatDialog) { 
    this.todoList = tasks.todoList;
    this.processList = tasks.processList;
    this.doneList = tasks.doneList;
  }

  ngOnInit(): void {
    console.log(this.todoList);
    console.log(this.doneList);
    this.tasks.todoList.sort((a,b)=>a.priority-b.priority);
  }
  onDrag(event : CdkDragDrop<any>){
    if(event.previousContainer === event.container){
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }else{
      transferArrayItem(event.previousContainer.data, event.container.data,event.previousIndex,event.currentIndex);
    }
    // console.log(this.todoList);
    // console.log(this.doneList);
    // console.log(this.processList);
    this.tasks.todoList.sort((a,b)=>a.priority-b.priority);
  }
  todoEditDialog(todo:any) {
    const dialogRef = this.dialog.open(TaskChangeComponent, {
      restoreFocus: false,
      data: {
        task: todo,
        editStatus: "todo"
      },
    });
    dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus());
    console.log(todo);
    this.tasks.todoList.sort((a,b)=>a.priority-b.priority);
  }
  todoDeleteDialog(todo:any) {
    const dialogRef = this.dialog.open(DeleteModalComponent, {restoreFocus: false});
    dialogRef.afterClosed().subscribe((data : any) => {
      this.menuTrigger.focus();
      if(data === "true"){
        let index = -1;
        this.tasks.todoList.forEach((e,i)=>{
          if(e.taskId === todo.taskId){
            index = i;
          }
        })
        this.tasks.todoList.splice(index,1);
      }
      console.log(typeof data);
    });
    this.tasks.todoList.sort((a,b)=>a.priority-b.priority);
    console.log(todo.taskId);
  }
  processEditDialog(process:any) {
    const dialogRef = this.dialog.open(TaskChangeComponent, {
      restoreFocus: false,
      data: {
        task: process,
        editStatus: "process"
      },
    });
    dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus());
  }
  processDeleteDialog(process:any) {
    const dialogRef = this.dialog.open(DeleteModalComponent, {restoreFocus: false});
    dialogRef.afterClosed().subscribe((data : any) => {
      this.menuTrigger.focus();
      if(data === "true"){
        let index = -1;
        this.tasks.processList.forEach((e,i)=>{
          if(e.taskId === process.taskId){
            index = i;
          }
        })
        this.tasks.processList.splice(index,1);
      }
    });
  }
  doneDeleteDialog(done:any) {
    const dialogRef = this.dialog.open(DeleteModalComponent, {restoreFocus: false});
    dialogRef.afterClosed().subscribe((data : any) => {
      this.menuTrigger.focus();
      if(data === "true"){
        let index = -1;
        this.tasks.doneList.forEach((e,i)=>{
          if(e.taskId === done.taskId){
            index = i;
          }
        })
        this.tasks.doneList.splice(index,1);
      }
    });
  }
}

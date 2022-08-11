import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  todoList  = [
    {
      taskId : 1659895621778,
      taskTitle: "Learn AI",
      taskDescription: "on monday i will start learning AI.",
      status : "new",
      createDate : "",
      completionDate : "",
      priority : 3
    },
    {
      taskId : 1659895621779,
      taskTitle: "Learn any Weapon",
      taskDescription: "P94 is my fav weapon.",
      status : "new",
      createDate : "",
      completionDate : "",
      priority : 2
    },
    {
      taskId : 1659895621780,
      taskTitle: "Learn Any musical instrument",
      taskDescription: "i am giving 90 days to it.",
      status : "new",
      createDate : "",
      completionDate : "",
      priority : 1
    }
  ]

  doneList = [
    {
      taskId : 1659895621781,
      taskTitle: "Learn AI",
      taskDescription: "on monday i will start learning AI.",
      status : "new",
      createDate : "",
      completionDate : "",
      priority : 3
    },
  ]

  processList = [
    {
      taskId : 1659895621782,
      taskTitle: "Learn AI",
      taskDescription: "on monday i will start learning AI.",
      status : "new",
      createDate : "",
      completionDate : "",
      priority : 1
    },
  ]
  constructor() { }
}

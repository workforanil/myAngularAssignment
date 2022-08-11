import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { NewtaskModalComponent } from './newtask-modal/newtask-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularAssignment1';
  constructor(public dialog: MatDialog){}
  onDialog(){
    this.dialog.open(NewtaskModalComponent);
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';

import { AppComponent } from './app.component';
import { TaskShowcaseComponent } from './task-showcase/task-showcase.component';
import { NewtaskModalComponent } from './newtask-modal/newtask-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskChangeComponent } from './task-change/task-change.component';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';


const routes : Routes = [
  {path:'',component:TaskShowcaseComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    TaskShowcaseComponent,
    NewtaskModalComponent,
    TaskChangeComponent,
    DeleteModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    DragDropModule,
    MatCardModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
    MatMenuModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

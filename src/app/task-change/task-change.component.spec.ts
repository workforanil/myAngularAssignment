import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskChangeComponent } from './task-change.component';

describe('TaskChangeComponent', () => {
  let component: TaskChangeComponent;
  let fixture: ComponentFixture<TaskChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskChangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtaskModalComponent } from './newtask-modal.component';

describe('NewtaskModalComponent', () => {
  let component: NewtaskModalComponent;
  let fixture: ComponentFixture<NewtaskModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewtaskModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewtaskModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

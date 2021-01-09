import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTrainersComponent } from './add-edit-trainers.component';

describe('AddEditTrainersComponent', () => {
  let component: AddEditTrainersComponent;
  let fixture: ComponentFixture<AddEditTrainersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditTrainersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditTrainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

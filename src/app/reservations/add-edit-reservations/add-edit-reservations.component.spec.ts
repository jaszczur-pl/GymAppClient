import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditReservationsComponent } from './add-edit-reservations.component';

describe('AddEditReservationsComponent', () => {
  let component: AddEditReservationsComponent;
  let fixture: ComponentFixture<AddEditReservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditReservationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesCreateFormComponent } from './employees-create-form.component';

describe('EmployeesCreateFormComponent', () => {
  let component: EmployeesCreateFormComponent;
  let fixture: ComponentFixture<EmployeesCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesCreateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

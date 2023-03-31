import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesListByCIdComponent } from './employees-list-by-cid.component';

describe('EmployeesListByCIdComponent', () => {
  let component: EmployeesListByCIdComponent;
  let fixture: ComponentFixture<EmployeesListByCIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesListByCIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesListByCIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyCreateFormComponent } from './company-create-form.component';

describe('CompanyCreateFormComponent', () => {
  let component: CompanyCreateFormComponent;
  let fixture: ComponentFixture<CompanyCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyCreateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

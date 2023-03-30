import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeCreateDto } from 'src/app/outDTO/employee-create-dto';
import { APIServiceService } from 'src/app/services/api.service.service';

@Component({
  selector: 'app-employees-create-form',
  templateUrl: './employees-create-form.component.html',
  styleUrls: ['./employees-create-form.component.css']
})
export class EmployeesCreateFormComponent implements OnInit {
  public formEmployee!: FormGroup;
  public companyId: string = '';
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private apiService: APIServiceService
  ) { }

  ngOnInit(): void {
    this.companyId = this.activatedRoute.snapshot.params['id'];
    this.formEmployee = this.formInit();
  }

  formInit(): FormGroup {
    return this.formBuilder.group(
      {
        rutEmployee: new FormControl('', [Validators.required]),
        fullName: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required])
      }
    )
  }

  async onSubmit(form: FormGroup) {

    if (form.invalid) {
      console.log('Faltan campos por completar');
      return;
    }

    let newEmployee: EmployeeCreateDto = {
      idCompany: this.companyId,
      rutEmployee: form.value.rutEmployee,
      fullName: form.value.fullName,
      email: form.value.email
    }

    try {
      const newCompany = await this.apiService.createEmployee(newEmployee)
      if (newCompany) {
        console.log('A new Employee has been created!');
      } else {
        console.log('Something went wrong with the creation of the new Company');
      }
    } catch (error) {
      console.log('Something went wrong on POST command.');
    } finally {
      this.router.navigate(['companies/employees', this.companyId]);
    }
  }

}

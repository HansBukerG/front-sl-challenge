import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyCreateDto } from 'src/app/outDTO/company-create-dto';
import { APIServiceService } from 'src/app/services/api.service.service';

@Component({
  selector: 'app-company-create-form',
  templateUrl: './company-create-form.component.html',
  styleUrls: ['./company-create-form.component.css']
})
export class CompanyCreateFormComponent implements OnInit {
  public formCompany!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private apiService: APIServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formCompany = this.formInit();
  }

  formInit(): FormGroup {
    return this.formBuilder.group(
      {
        rut: new FormControl('', [Validators.required]),
        name: new FormControl('', [Validators.required]),
        address: new FormControl('', Validators.required),
        phone: new FormControl('', [Validators.required])
      }
    )
  }

  async onSubmit(form: FormGroup) {
    if (form.invalid) {
      console.log('Faltan campos por completar');
      return;
    }

    let company: CompanyCreateDto = {
      name: form.value.name,
      address: form.value.address,
      rut: form.value.rut,
      phone: form.value.phone,
    }

    try {
      const newCompany = await this.apiService.createCompany(company)
      if (newCompany) {
        console.log('A new company has been created!');

      } else {
        console.log('Somethign went wrong with the creation of the new Company');
      }
    } catch (error) {
      console.log('Something went wrong on POST command.');
    } finally {
      this.goToCompanyList();
    }
  }
  goToCompanyList () {
    this.router.navigate(['companies']);
  }
}

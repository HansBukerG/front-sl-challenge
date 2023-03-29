import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'src/app/models/company.model';
import { Employee } from 'src/app/models/employee.model';
import { APIServiceService } from 'src/app/services/api.service.service';

@Component({
  selector: 'app-employees-list-by-cid',
  templateUrl: './employees-list-by-cid.component.html',
  styleUrls: ['./employees-list-by-cid.component.css']
})
export class EmployeesListByCIdComponent implements OnInit {
  public company: Company = { id: 0, rut: '', name: '', address: '', phone: '', createdAt: '', updatedAt: '' };
  public employeesList: Employee[] = []
  public companyId: string = '';
  constructor(
    private apiService: APIServiceService,
    private activatedRoute: ActivatedRoute,
    private router:Router
  ) {
  }

  ngOnInit(): void {
    this.companyId = this.activatedRoute.snapshot.params['id'];
    this.getEmployeesList(this.companyId)
  }

  getEmployeesList = async (id: string): Promise<void> => {
    try {
      const employees = await this.apiService.getCompanyById(id)
      if (employees) {
        this.company = employees.company;
        this.employeesList = employees.employees;
      }
    } catch (error) {
      console.log(error);
      console.log('There is an error with request');
    }
  }

  goToFormEmployee() {

  }
}

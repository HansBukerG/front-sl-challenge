import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/company.model';
import { APIServiceService } from 'src/app/services/api.service.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  public companyList: Company[] = [];

  constructor(
    private apiService: APIServiceService,
    private router: Router
  ) {

  }
  ngOnInit(): void {
    this.getCompanyList();

  }

  getCompanyList = async (): Promise<void> => {
    try {
      const companies = await this.apiService.getCompanies();
      if (companies) {
        this.companyList = companies.company;
      }
    } catch (error) {
      console.log('There is an error with REQUEST');
    }
  };

  navigateTo(id: number): void {
    this.router.navigate(['companies/employees', id]);
  }

  goToFormCompany(): void {
    this.router.navigate(['companies/create']);
  }

}

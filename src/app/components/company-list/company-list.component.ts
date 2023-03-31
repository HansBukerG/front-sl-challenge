import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/company.model';
import { APIServiceService } from 'src/app/services/api.service.service';
import Swal from 'sweetalert2';

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
      console.log('There is an error with request');
    }
  };

  deleteCompany = async (id: number): Promise<void> => {
    Swal.fire({
      title: '¿Estás seguro de que deseas eliminar la empresa?',
      text: 'Esta acción no puede ser revertida',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#dc3545',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        const deletedCompany = this.apiService.deleteCompany(id);
        Swal.fire('¡Empresa eliminada!', '', 'success');
        this.getCompanyList();
      } else if (result.isDenied) {
        Swal.fire('Cancelado', 'No se eliminó la empresa', 'info');
      }
    })
  }

  navigateTo(id: number): void {
    this.router.navigate(['companies/employees', id]);
  }

  goToFormCompany(): void {
    this.router.navigate(['companies/create']);
  }


}

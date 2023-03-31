import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'src/app/models/company.model';
import { Employee } from 'src/app/models/employee.model';
import { APIServiceService } from 'src/app/services/api.service.service';
import Swal from 'sweetalert2';

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
    private router: Router
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

  deleteEmployee = async (id: number): Promise<void> => {
    Swal.fire({
      title: '¿Estás seguro de que deseas eliminar este empleado?',
      text: 'Esta acción no puede ser revertida',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#dc3545',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        const deletedCompany = this.apiService.deleteEmployee(id);
        Swal.fire('Empleado eliminado!', '', 'success');
        this.getEmployeesList(this.companyId)
      } else if (result.isDenied) {
        Swal.fire('Cancelado', 'No se eliminó el Empleado', 'info');
      }
    })
  }

  goToFormEmployee() {
    this.router.navigate(['employees/create/', this.companyId]);
  }

  goToHome() {
    this.router.navigate(['companies'])
  }
}

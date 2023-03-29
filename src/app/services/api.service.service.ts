import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CompanyCreateDto } from '../models/company-create-dto';
import { CompanyWithEmployees } from '../models/company-with-employees.indto';
import { Company } from '../models/company.indto';
import { EmployeeCreateDto } from '../models/employee-create-dto';
import { Employee } from '../models/employee.indto';

@Injectable({
  providedIn: 'root'
})
export class APIServiceService {

  constructor(private http: HttpClient) { }

  async getCompanies(): Promise<Company[]> {
    try {
      const companies = await this.http.get<Company[]>(`${environment.apiUrl}/company/get`).toPromise();
      return companies || [];
    } catch (error) {
      console.error(error);
      console.log('Ocurrió un error al obtener las empresas');
      return [];
    }
  }

  async getCompanyById(id: string): Promise<CompanyWithEmployees | undefined> {
    try {
      const companyWEmployees = await this.http
        .get<CompanyWithEmployees>(`${environment.apiUrl}/company/${id}`)
        .toPromise();
      return companyWEmployees;
    } catch (error) {
      console.error(error);
      console.log('Ocurrió un error al obtener la empresa');
      return undefined;
    }
  }

  async createCompany(company: CompanyCreateDto): Promise<Company | undefined> {
    try {
      const createdCompany = await this.http.post<Company>(`${environment.apiUrl}/company/post`, company).toPromise();
      return createdCompany;
    } catch (error) {
      console.error(error);
      console.log('Ocurrió un error al crear la empresa');
      return undefined;
    }
  }

  async createEmployee(employee: EmployeeCreateDto): Promise<Employee | undefined> {
    try {
      const createdEmployee = await this.http
        .post<Employee>(`${environment.apiUrl}/employee/post`, employee)
        .toPromise();
      return createdEmployee;
    } catch (error) {
      console.error(error);
      console.log('Ocurrió un error al crear el empleado');
      return undefined;
    }
  }
}

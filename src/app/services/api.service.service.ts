import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CompanyCreateDto } from '../outDTO/company-create-dto';
import { Company } from '../models/company.model';
import { EmployeeCreateDto } from '../outDTO/employee-create-dto';
import { Employee } from '../models/employee.model';
import { CompanyDto } from '../inDTO/company.dto';
import { CompanyWithEmployees } from '../inDTO/company-with-employees.indto';


@Injectable({
  providedIn: 'root'
})
export class APIServiceService {

  constructor(private http: HttpClient) { }

  async getCompanies(): Promise<CompanyDto | undefined> {
    try {
      const companies = await this.http.get<CompanyDto>(`${environment.apiUrl}/company/get`).toPromise();
      return companies || undefined;
    } catch (error) {
      console.log('There is an error in GET request');
      return undefined;
    }
  }

  async getCompanyById(id: string): Promise<CompanyWithEmployees | undefined> {
    try {
      const companyWEmployees = await this.http.get<CompanyWithEmployees>(`${environment.apiUrl}/company/get/${id}`).toPromise();
      return companyWEmployees || undefined;
    } catch (error) {
      console.log('There is an error in GET request');
      return undefined;
    }
  }

  async createCompany(company: CompanyCreateDto): Promise<Company | undefined> {
    try {
      const createdCompany = await this.http.post<Company>(`${environment.apiUrl}/company/post`, company).toPromise();
      return createdCompany;
    } catch (error) {
      console.log('There is an error in POST request');
      return undefined;
    }
  }

  async createEmployee(employee: EmployeeCreateDto): Promise<Employee | undefined> {
    try {
      const createdEmployee = await this.http.post<Employee>(`${environment.apiUrl}/employee/post`, employee).toPromise();
      return createdEmployee;
    } catch (error) {
      console.log('There is an error in POST request');
      return undefined;
    }
  }

  async deleteCompany(id: number): Promise<any | undefined> {
    try {
      const result = await this.http.delete(`${environment.apiUrl}/company/delete/${id}`).toPromise();
      return result;
    } catch (error) {
      console.log('There is an error in DELETE request');
      return 0;
    }
  }

  async deleteEmployee(id: number): Promise<any | undefined> {
    try {
      const result = await this.http.delete(`${environment.apiUrl}/employee/delete/${id}`).toPromise();
      return result;
    } catch (error) {
      console.log('There is an error in DELETE request');
      return 0;
    }
  }
}

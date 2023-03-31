import { Company } from "../models/company.model";
import { Employee } from "../models/employee.model";

export interface CompanyWithEmployees {
    company: Company;
    employees: Employee[];
}

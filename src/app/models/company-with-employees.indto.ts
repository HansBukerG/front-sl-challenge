import { Company } from "./company.indto";
import { Employee } from "./employee.indto";

export interface CompanyWithEmployees {
    company: Company;
    employees: Employee[];
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyCreateFormComponent } from './components/company-create-form/company-create-form.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { EmployeesCreateFormComponent } from './components/employees-create-form/employees-create-form.component';
import { EmployeesListByCIdComponent } from './components/employees-list-by-cid/employees-list-by-cid.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'companies',
    pathMatch: 'full'
  },
  {
    path: 'companies',
    component: CompanyListComponent
  },
  {
    path: 'companies/employees/:id',
    component: EmployeesListByCIdComponent
  },
  {
    path: 'companies/create',
    component: CompanyCreateFormComponent
  },
  {
    path: 'employees/create/:id',
    component: EmployeesCreateFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

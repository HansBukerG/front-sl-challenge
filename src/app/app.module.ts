import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartMenuComponent } from './components/start-menu/start-menu.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { EmployeesListByCIdComponent } from './components/employees-list-by-cid/employees-list-by-cid.component';
import { CompanyCreateFormComponent } from './components/company-create-form/company-create-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeesCreateFormComponent } from './components/employees-create-form/employees-create-form.component';

@NgModule({
  declarations: [
    AppComponent,
    StartMenuComponent,
    CompanyListComponent,
    EmployeesListByCIdComponent,
    CompanyCreateFormComponent,
    EmployeesCreateFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

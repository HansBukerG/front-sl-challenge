import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-company-create-form',
  templateUrl: './company-create-form.component.html',
  styleUrls: ['./company-create-form.component.css']
})
export class CompanyCreateFormComponent implements OnInit {
  public formCompany: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) {

  }
  ngOnInit(): void {
    this.formCompany = this.formInit();
  }

  formInit():FormGroup{
    return this.formBuilder.group(
      {
        tipo : new FormControl('',[Validators.required]),
        descripcion: new FormControl('',Validators.required),
        valor: new FormControl(0,[Validators.required,Validators.min(0)])
      }
    )
  }

  onSubmit(formulario:FormGroup){
    if(formulario.invalid){
      console.log('Faltan campos por completar');
    }
    else{
      if (formulario.value.tipo === 'Ingreso') {
        this.ingreso =  new Ingreso(
          formulario.value.descripcion,
          formulario.value.valor
          )

          this.servicioIngreso.ingresos.push(this.ingreso);
        } else {
          this.egreso =  new Egreso(
            formulario.value.descripcion,
            formulario.value.valor
            )

          this.servicioEgreso.egresos.push(this.egreso);
      }
    }
  }
}

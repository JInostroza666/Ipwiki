import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmpleadoService } from '../pages/empleado/empleado.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  empleadoForm !: FormGroup;
  actionBtn: string = 'Crear';

  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private empleadoSvc: EmpleadoService
  ) { }

  ngOnInit(): void {
    this.empleadoForm = this.formBuilder.group({
      Rut_Empleado: ['', Validators.required],
      Nombres: ['', Validators.required],
      Apellido_Paterno: ['', Validators.required],
      Apellido_Materno: ['', Validators.required],
      Telefono_Empleado: ['', Validators.required],
      Cargo: ['', Validators.required],
      Email_Empleado: ['', Validators.required],
      Direccion_Empleado: ['', Validators.required],
      Estado: ['', Validators.required],
      Clave: ['', Validators.required],
      Privilegio: ['', Validators.required],
      Codigo_Comuna: ['', Validators.required],
      Codigo_Sucursal: ['', Validators.required]
    });
    console.log(this.editData);
    if(this.editData){
      this.actionBtn = 'Editar';
      this.empleadoForm.controls['Rut_Empleado'].setValue(this.editData.Rut_Empleado);
      this.empleadoForm.controls['Codigo_Comuna'].setValue(this.editData.Codigo_Comuna);
      this.empleadoForm.controls['Codigo_Sucursal'].setValue(this.editData.Codigo_Sucursal);
      this.empleadoForm.controls['Nombres'].setValue(this.editData.Nombres);
      this.empleadoForm.controls['Apellido_Paterno'].setValue(this.editData.Apellido_Paterno);
      this.empleadoForm.controls['Apellido_Materno'].setValue(this.editData.Apellido_Materno);
      this.empleadoForm.controls['Telefono_Empleado'].setValue(this.editData.Telefono_Empleado);
      this.empleadoForm.controls['Cargo'].setValue(this.editData.Cargo);
      this.empleadoForm.controls['Email_Empleado'].setValue(this.editData.Email_Empleado);
      this.empleadoForm.controls['Direccion_Empleado'].setValue(this.editData.Direccion_Empleado);
      this.empleadoForm.controls['Estado'].setValue(this.editData.Estado);
      this.empleadoForm.controls['Clave'].setValue(this.editData.Clave);
      this.empleadoForm.controls['Privilegio'].setValue(this.editData.Privilegio);
    }
  }



  createEmpleado() {
    
    this.empleadoSvc.createEmpleado(this.empleadoForm.value).subscribe({
      next:(res) => {
        alert('Accion exitosa')
      }
    })
  }

  editEmpleado() {
    this.empleadoSvc.editEmpleado(this.empleadoForm.value).subscribe({
      next:(res) => {
        alert('Empleado editado')
      }
    })
  }
}

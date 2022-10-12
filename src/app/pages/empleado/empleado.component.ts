import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EmpleadoI } from './empleado';
import { EmpleadoService } from './empleado.service';
import { Router } from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from 'src/app/dialog/dialog.component';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.scss']
})
export class EmpleadoComponent implements OnInit {

  dataSource: any = [];
  displayedColumns: string[] =  ['Rut_Empleado', 'Nombres', 'Apellido_Paterno', 'Apellido_Materno', 'Telefono_Empleado', 'Cargo', 'Email_Empleado', 'Direccion_Empleado', 'Estado', 'Clave', 'Privilegio', 'Codigo_Comuna', 'Codigo_Sucursal', 'actions'];
  constructor(
    private empleadoSvc : EmpleadoService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '30%'
    }).afterClosed().subscribe(val => {
      if(val === 'Crear'){
        this.getEmpleados();
      }
    })
  }

  ngOnInit(): void {
    this.empleadoSvc.getAllEmpleados().subscribe(
      res => console.log(res)
    );
    this.getEmpleados();

  }

  getEmpleados():void{
    
    this.empleadoSvc.getAllEmpleados().subscribe((empleados:EmpleadoI[])=>{
      this.dataSource = new MatTableDataSource<EmpleadoI>(empleados);
    });
  }

  OnDelete(Rut_Empleado: string): void {
    this.empleadoSvc.delete(Rut_Empleado).subscribe(
      res => {
        console.log(res);
        this.getEmpleados();
      }
    );
  }

  createEmpleado(row : any): void {
    this.dialog.open(DialogComponent, {
      width: '30%',
      data: { row }
    })
  }

  OnEdit(row: any) {
    this.dialog.open(DialogComponent, {
      width: '30%',
      data: row
    }).afterClosed().subscribe(val => {
      
        this.getEmpleados();
    })



  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EmpleadoI } from './empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  empleados$: Observable<EmpleadoI[]> | undefined;
  constructor(
    private http: HttpClient
  ) { }


 getAllEmpleados():Observable<EmpleadoI[]> {
    this.empleados$ = this.http.get<EmpleadoI[]>(environment.baseUrl+'/empleado');
    return this.empleados$;
  }

  delete(Rut_Empleado:String):Observable<EmpleadoI> {
    return this.http.delete<EmpleadoI>(environment.baseUrl+'/empleado/'+Rut_Empleado).pipe(
      map((res:EmpleadoI) => {
        return res;})
    );
 }

 createEmpleado(data : any){
  return this.http.post<any>(environment.baseUrl+'/empleado/', data);
 }

 editEmpleado(data : any){
  return this.http.put<any>(environment.baseUrl+'/empleado/', data);
 }
}
  

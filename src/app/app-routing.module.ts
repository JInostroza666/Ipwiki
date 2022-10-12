import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckLoginGuard } from './auth/guards/check-login.guard';

const routes: Routes = [
  {path : '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
    canActivate: [CheckLoginGuard]},
  { path: 'empleado', loadChildren: () => import('./pages/empleado/empleado.module').then(m => m.EmpleadoModule),
    canActivate: [CheckLoginGuard] },
  { path: 'marca', loadChildren: () => import('./pages/marca/marca.module').then(m => m.MarcaModule),
  canActivate: [CheckLoginGuard] },
  { path: 'comuna', loadChildren: () => import('./pages/comuna/comuna.module').then(m => m.ComunaModule),
  canActivate: [CheckLoginGuard] },
  { path: 'region', loadChildren: () => import('./pages/region/region.module').then(m => m.RegionModule),
  canActivate: [CheckLoginGuard] },
  { path: 'sucursal', loadChildren: () => import('./pages/sucursal/sucursal.module').then(m => m.SucursalModule),
  canActivate: [CheckLoginGuard] },
  { path: 'ciudad', loadChildren: () => import('./pages/ciudad/ciudad.module').then(m => m.CiudadModule),
  canActivate: [CheckLoginGuard] },
  { path: 'empresa', loadChildren: () => import('./pages/empresa/empresa.module').then(m => m.EmpresaModule),
  canActivate: [CheckLoginGuard] },
  {path: '**', redirectTo: '/login'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

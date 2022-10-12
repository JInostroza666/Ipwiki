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
  {path: '**', redirectTo: '/login'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

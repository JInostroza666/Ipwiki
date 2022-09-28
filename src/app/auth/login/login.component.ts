import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  constructor(
    private fb: FormBuilder,
    private authSvc: AuthService,
    private router: Router
  ) { }

  loginForm = this.fb.group({
    Email_Empleado: ['', [Validators.required]],
    Clave: ['', [Validators.required]]
  });

  ngOnInit(): void {
    /*const data={Email_Empleado: 'jose@mail.com', Clave: '1234'};
    this.authSvc.login(data).subscribe(
      user => {
        console.log(user);
      }
    )*/
  }

  onLogin() {
    console.log(this.loginForm.value);
    const formValue = this.loginForm.value;
    this.authSvc.login(formValue).subscribe(
      user => {
        if(user){
          this.router.navigate(['home']);
        }
      })
  }

  isValidField(field: string):string {
    const validatedField = this.loginForm.get(field);
    return (!validatedField?.valid && validatedField?.touched) ? 'is-invalid' : validatedField?.touched ? 'is-valid' : '';
  }

}

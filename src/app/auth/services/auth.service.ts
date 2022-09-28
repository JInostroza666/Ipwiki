import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { UserI, UserResponseI } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private logguedIn = new BehaviorSubject <boolean>(false);
  constructor(
    private http: HttpClient,
    private router: Router
  ) { 
    this.checkToken().subscribe();
  }
  get isLogged():Observable<boolean> {
    return this.logguedIn.asObservable();
  }
  private readonly TOKEN = 'token';
  login(user:UserI):Observable<UserResponseI | void> {
    return this.http.post<UserResponseI> (environment.baseUrl+'/auth/login', user)
    .pipe(
      map((user:UserResponseI) => {
        this.saveToken(user);
        this.logguedIn.next(true);
        return user;
      }
    ))
  }

  private saveToken(user:UserResponseI) {
    const {message, ...rest} = user;
    localStorage.setItem(this.TOKEN, JSON.stringify(rest.token).replace( /['"]+/g, ''));
    localStorage.setItem('user', JSON.stringify(rest));
  }

  logout():void {
    localStorage.removeItem(this.TOKEN);
    localStorage.removeItem('user');
    this.logguedIn.next(false);
    this.router.navigate(['./login']);
  }

  checkToken(): Observable<boolean> {
    const token = localStorage.getItem(this.TOKEN);
    const helper = new JwtHelperService();
    if (!token) {
      this.logout();
      return new Observable<boolean>();
    }
    const isExpired = helper.isTokenExpired(token);
    if (isExpired) {
      this.logout();
      return new Observable<boolean>();
    }
    this.logguedIn.next(true);
    return new Observable<boolean>();
  }

}


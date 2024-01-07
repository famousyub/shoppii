import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {

  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Userauth } from '../models/userauth';
import { Usernew } from '../models/usernew';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  endpointsauth = `${environment.BACK_END}/api/v1/auth/signin`;
  endpointreg = `${environment.BACK_END}/api/v1/auth/signup`;
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  jwtHelper: JwtHelperService;
  currentUser: Object = {};
  constructor(private Http : HttpClient,public router: Router) { 
    this.jwtHelper = new JwtHelperService();
  }

  singIn(User_ : Userauth){
    return this.Http.post<any>(this.endpointsauth,User_);
    
  }


  getToken(){
    return localStorage.getItem("accessToken");
  }



signUp(user_: Usernew):Observable<any>{

  
  return this.Http.post(this.endpointreg,user_).pipe(catchError(this.handleError));

}


public isAuthenticated(): boolean {
  const token = localStorage.getItem('accessToken');
  // Check whether the token is expired and return
  // true or false
  return !this.jwtHelper.isTokenExpired(token);
}



  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('accessToken');
    return authToken !== null ? true : false;
  }
  doLogout() {
    let removeToken = localStorage.removeItem('accessToken');
    if (removeToken == null) {
      this.router.navigate(['log-in']);
    }
  }
  // User profile
  getUserProfile(id: any): Observable<any> {
    let api = `${this.endpointreg}/user-profile/${id}`;
    return this.Http.get(api, { headers: this.headers }).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }
  // Error
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}

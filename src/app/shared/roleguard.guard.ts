import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class RoleguardGuard implements CanActivate {

  constructor(public auth: AuthService, public router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   

      const expectedRole = route.data.expectedRole;
      const token = localStorage.getItem('accessToken');
      // decode the token to get its payload
      const tokenPayload:any = decode(token);
      if (
        !this.auth.isAuthenticated() || 
        tokenPayload.roles !== expectedRole
      ) {
        this.router.navigate(['login']);
        return false;
      }
   
   
      return true;
  }
  
}

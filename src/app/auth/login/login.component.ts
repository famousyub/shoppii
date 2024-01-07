import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'll-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,private router: Router) { }

  currentUser: Object = {};
  authenticationError = false;

  loginForm = new FormGroup({
    username: new FormControl('', {  validators: [Validators.required] }),
    password: new FormControl('', {  validators: [Validators.required] }),
    //rememberMe: new FormControl(false, { nonNullable: true, validators: [Validators.required] }),
  });

  ngOnInit(): void {
    if(this.authService.isLoggedIn){
     // alert(this.authService.isLoggedIn)
      this.router.navigate(['/']);
    }
  }

  login ():void {

    this.authService.singIn(this.loginForm.getRawValue()).subscribe((res:any) =>{
          
      localStorage.setItem("accessToken",res.accessToken);
      console.table(res);
      localStorage.setItem("user",res);
      sessionStorage.setItem("logiuser",res);
      this.authenticationError = true;
      Object.assign(res,this.currentUser);
      this.router.navigate(['home']);
    });
}


}

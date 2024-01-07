import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'll-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService,private router: Router) { }

  currentUser: Object = {};
  authenticationError = false;

  loginForm = new FormGroup({
    username: new FormControl('', {  validators: [Validators.required] }),
    password: new FormControl('', {  validators: [Validators.required] }),
    email: new FormControl(false, { validators: [Validators.required] }),
    age: new FormControl(false, { validators: [Validators.required] }),
    phonenumber: new FormControl(false, { validators: [Validators.required] })
  });
  ngOnInit(): void {
    if(this.authService.isLoggedIn){
      this.router.navigate(['/']);
    }
  }


   signup(){
    this.authService.signUp(this.loginForm.getRawValue()).subscribe(res=>{
      this.authenticationError = true ,
      Object.assign(res,this.currentUser);
      this.router.navigate(['auth/login']);
    })
   }
  
  

}

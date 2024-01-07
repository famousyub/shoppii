import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'll-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  particlesOptions = {
    particles: {
      color: {
        value: ['#ffffff', '#ffffff']
      },
      size: {
        value: 1
      },
      lineLinked: {
        enable: true,
        color: 'random'
      },
      move: {
        enable: true,
        speed: 1.5
      }
    }
  };
  islogin: boolean = false ;
  constructor( private authService: AuthService) {}

  ngOnInit(): void {
          if(this.authService.isLoggedIn){
          //  alert(this.authService.isLoggedIn)
             this.islogin = true ;
          }else {
            this.islogin=false ;
           
          }
  }
}

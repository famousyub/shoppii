import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-curruser',
  templateUrl: './curruser.component.html',
  styleUrls: ['./curruser.component.scss']
})
export class CurruserComponent implements OnInit {

  curruser :Object= {};
  constructor(private authservice: AuthService) { }

  ngOnInit(): void {

    if(this.authservice.isLoggedIn){
      console.log(JSON.parse(JSON.stringify(localStorage.getItem("user")))["username"]);
      Object.assign(this.curruser, JSON.parse (JSON.stringify(localStorage.getItem("user"))));

     // console.table(this.curruser);

    }
  }





}

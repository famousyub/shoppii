import { Component, OnInit } from '@angular/core';
import { menuList } from '../../data/menus';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'll-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  navList = [];
  uzser_ :boolean =false;
  constructor(private authservice:AuthService) { }

  ngOnInit(): void {
    this.navList = menuList;

    if(this.authservice.isLoggedIn){
      this.uzser_ = true ;

    } else  {
      this.uzser_=false ;
    }
  }

}

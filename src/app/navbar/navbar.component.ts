import { AuthService } from 'src/core/service/auth.service';

import { Component } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
isLoggedIn:boolean = false;
  constructor(private _authService:AuthService){
this._authService.userData.subscribe((res)=>{
console.log(res,'dffdf');
if(this._authService.userData.getValue()){
  this.isLoggedIn =true;

}else{
  this.isLoggedIn = false;
}
})
}
  logOut(){
    this._authService.logOut();
  }
}

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{


  constructor(private router: Router) { }
  canActivate():boolean {
    
    if(this.getToken()!== null){
        return true;
    }else{
      this.router.navigate(['/pages/login']);
    }
  }



  getToken() {
    if (localStorage.getItem('token') !== null){
      return  localStorage.getItem('token') ;
    }
    return null
  }

}

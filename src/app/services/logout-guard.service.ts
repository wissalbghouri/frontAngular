import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogoutGuardService implements CanActivate{
  constructor(private router:Router) { }
  canActivate():boolean{
    if(this.getToken() !== null){
      this.router.navigate(['/dashboard/profile'])    

    }else{
        return true;
    }
  }
  getToken() {
    if (localStorage.getItem('token') !== null){
      return  localStorage.getItem('token') ;
    }
    return null
  }
}

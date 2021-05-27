import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';


@Component({
    selector: 'app-register-cmp',
    templateUrl: './register.component.html'
})

export class RegisterComponent implements OnInit, OnDestroy {
    test: Date = new Date();
    succes=false
    error=false
    message=""

    constructor(
      private http:HttpClient
    ) {

    }




    ngOnInit() {
      const body = document.getElementsByTagName('body')[0];
      body.classList.add('register-page');
      body.classList.add('off-canvas-sidebar');
    }
    ngOnDestroy(){
      const body = document.getElementsByTagName('body')[0];
      body.classList.remove('register-page');
      body.classList.remove('off-canvas-sidebar');
    }



    register(form:NgForm){
      console.log(form);
      let user=form.form.value
      console.log(user);


        this.http.post(environment.address_symfony+'register',user).subscribe(
        (data : any) => {

          this.succes=true
          this.error=false
          this.message=data.result
                  
        },
        (error) => {

          this.succes=false
          this.error=true 
          this.message=error.error.result
          
          
        })





    }





}



import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';

declare var $: any;

@Component({
    selector: 'app-login-cmp',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
    test: Date = new Date();
    private toggleButton: any;
    private sidebarVisible: boolean;
    private nativeElement: Node;
    error:boolean
    


    constructor(private element: ElementRef,private http:HttpClient) {
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }

    ngOnInit() {

     this.error=false

        var navbar : HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        const body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');
        body.classList.add('off-canvas-sidebar');
        const card = document.getElementsByClassName('card')[0];
        setTimeout(function() {
            // after 1000 ms we add the class animated to the login/register card
            card.classList.remove('card-hidden');
        }, 700);
    }
    sidebarToggle() {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        var sidebar = document.getElementsByClassName('navbar-collapse')[0];
        if (this.sidebarVisible == false) {
            setTimeout(function() {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        } else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    }
   

connect(loginform:NgForm){

    




    this.http.post(environment.address_symfony+'api/login_check',loginform.form.value).subscribe(
        (resultat : any) => {

            
console.log(resultat);

           localStorage.setItem('token',resultat.token)
           
           localStorage.setItem('email',resultat.user.email)
           localStorage.setItem('userId',resultat.user.id)

           location.reload();
            

         
                  
        },
        (error) => {
            this.error=true

          
            //console.log(error);
          
        })



}


}

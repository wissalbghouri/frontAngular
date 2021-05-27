import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{environment} from '../../../environments/environment';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  test: Date = new Date();
  succes = false
  error = false
  message = ""
  users :any[]
  constructor(
    private http: HttpClient
    ) { 
      this.http.get(environment.address_symfony+'getusers').subscribe(
        

          (data : any) => {
              console.log(data);

              this.users = data
                    
          },
          (error) => {
         
          })
        
      
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

}

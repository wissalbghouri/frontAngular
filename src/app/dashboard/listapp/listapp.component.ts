import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-listapp',
  templateUrl: './listapp.component.html',
  styleUrls: ['./listapp.component.css']
})
export class ListappComponent implements OnInit {

  test: Date = new Date();
  succes = false
  error = false
  message = ""
  users :any[]

  constructor(private http: HttpClient) { 


    this.http.get(environment.address_symfony+'getlapp').subscribe(
        

      (data : any) => {
          console.log(data);

          this.users = data
                
      },
      (error) => {
     
      })

  }

  ngOnInit(): void {
  }

}

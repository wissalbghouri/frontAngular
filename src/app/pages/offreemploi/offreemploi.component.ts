import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-offreemploi',
  templateUrl: './offreemploi.component.html',
  styleUrls: ['./offreemploi.component.css']
})
export class OffreemploiComponent implements OnInit {
  test: Date = new Date();
  succes = false
  error = false
  message = ""
  users :any[]

  constructor(private http: HttpClient) { this.http.get(environment.address_symfony+'getlapps').subscribe(
        

    (data : any) => {
        console.log(data);

        this.users = data
              
    },
    (error) => {
   
    })}














  

  ngOnInit(): void {
  }

}

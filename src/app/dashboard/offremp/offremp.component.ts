import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-offremp',
  templateUrl: './offremp.component.html',
  styleUrls: ['./offremp.component.css']
})
export class OffrempComponent implements OnInit {

  constructor(
    private http:HttpClient
  ) {

  }

  ngOnInit(): void {
  }
  add(offredemploi){

console.log(offredemploi.form.value);



let offre :any
    offre = offredemploi.form.value
    offre.entreprise = localStorage.getItem('userId')

    this.http.post(environment.address_symfony+'addoffre',offre).subscribe(
      (data : any) => {

    
                
      },
      (error) => {


        
        
      })






  }

}

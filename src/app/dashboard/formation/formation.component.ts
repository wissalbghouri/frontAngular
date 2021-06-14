import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }




  add(formation){

    console.log(formation.form.value);
    
    
    
    let offre :any
        offre = formation.form.value
        offre.entreprise = localStorage.getItem('userId')
    
        this.http.post(environment.address_symfony+'formation',offre).subscribe(
          (data : any) => {
    
        
                    
          },
          (error) => {
    
    
            
            
          })
    
    
    
    
    
    
      }








}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-appoffre',
  templateUrl: './appoffre.component.html',
  styleUrls: ['./appoffre.component.css']
})
export class AppoffreComponent implements OnInit {

  constructor(
    private http:HttpClient
  ) {

  }


  ngOnInit(): void {
  }
  add(appelOffre){

    console.log(appelOffre.form.value);
    let appel_offre :any
    appel_offre = appelOffre.form.value
    appel_offre.entreprise = localStorage.getItem('userId')

    this.http.post(environment.address_symfony+'addappeloffre',appel_offre).subscribe(
      (data : any) => {

    
                
      },
      (error) => {


        
        
      })
    
  }
}

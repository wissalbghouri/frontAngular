import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RouterModule,Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
user ={
  nomEnp :"",
  domaineAct:"",
  login:"",
  email:"",
 adresse:"",
 siteweb:"",
 numtel:"",
 logo:"",
 
 categorie:"",
}
  constructor(private http:HttpClient) { 


    let userId = localStorage.getItem('userId')
    this.http.get(environment.address_symfony+'api/entreprises/'+userId).subscribe(
      (resultat : any) => {
        console.log(resultat);
      this.user.nomEnp = resultat.nomEnp  
      this.user.domaineAct = resultat.domaineAct
            this.user.login = resultat.login
            this.user.adresse = resultat.adresse
            this.user.siteweb = resultat.siteweb
            this.user.numtel = resultat.numtel
            this.user.categorie = resultat.categorie
            this.user.logo = resultat.logo
            

      this.user.email = resultat.username

        console.log(resultat);
  //       const obj = JSON.parse(resultat);
  // console.log(obj);
  
  
        // this.user = {
        //   firstName :obj.FirstName,
        //   lastName:obj.LastName,
        //   email:obj.email,
        //   picture:"",
  
        // }
        //console.log(this.user);
        
  
      },
      (error) => {
        console.log(error);
        
       //   console.log(error);
          
      })
  
  }

  ngOnInit(): void {
   
  }

}

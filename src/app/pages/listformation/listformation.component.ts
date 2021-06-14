import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-listformation',
  templateUrl: './listformation.component.html',
  styleUrls: ['./listformation.component.css']
})
export class ListformationComponent implements OnInit {
  test: Date = new Date();
  succes = false
  error = false
  message = ""
  formations :any[] = []
 
  user ={
   
   logo:"",
   
   
  }

  constructor(private http: HttpClient) {

    this.http.get(environment.address_symfony+'getformation').subscribe(
        

      (data : any) => {
        data.forEach(element => {
          
         // let entreprise = parseInt(element.entreprise.toString(), 10)
        //  console.log();
          this.http.get(environment.address_symfony+'api/entreprises/'+element.entreprise.replace(/[^0-9]/g, '')).subscribe(
            (resultat : any) => {
              element.entreprise = resultat
              this.formations.push(element)
              this.formations = [...this.formations]

            //  console.log(element);
              console.log(this.formations);
           
                // 
              
        
            },
            (error) => {
              console.log(error);
              
             //   console.log(error);
                
            })
          
      //    console.log(element);
          
          
        });
      //  console.log(data);
        
       // this.user.logo = data.logo
        //  console.log(data);
  
        //  this.formations = data
                
      },
      (error) => {
     
      })




     /* let userId = localStorage.getItem('userId')
      this.http.get(environment.address_symfony+'api/entreprises/'+userId).subscribe(
        (resultat : any) => {
          console.log(resultat);
       
            // 
          
    
        },
        (error) => {
          console.log(error);
          
         //   console.log(error);
            
        })

*/



   }










  ngOnInit(): void {
  }



  







}

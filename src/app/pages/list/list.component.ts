import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{environment} from '../../../environments/environment';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import{EntreprisedialogComponent} from '../entreprisedialog/entreprisedialog.component'
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
    private http: HttpClient,
    public dialog: MatDialog
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
  showFormation(){
  }


  openDialog(user) {
   // console.log(us);
    
    this.dialog.open(EntreprisedialogComponent, {
      width: '500px',

      data: {

        entreprise: user
      }
    }); 
  }
}

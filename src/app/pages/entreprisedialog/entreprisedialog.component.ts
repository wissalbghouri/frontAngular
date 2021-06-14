import {Component, Inject,OnInit} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-entreprisedialog',
  templateUrl: './entreprisedialog.component.html',
  styleUrls: ['./entreprisedialog.component.css']
})
export class EntreprisedialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data.entreprise);
    
   }

  ngOnInit(): void {
  }

}

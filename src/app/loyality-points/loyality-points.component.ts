import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-loyality-points',
  templateUrl: './loyality-points.component.html',
  styleUrls: ['./loyality-points.component.css']
})
export class LoyalityPointsComponent  {
  //dialog: any;

  
    constructor(public dialog: MatDialog) {}

    openDialog() {
      const dialogRef = this.dialog.open(DialogContentExampleDialog);
    }
    imageSrc = '../../assets/icon/plus.svg'  
    imageplus = '../../assets/icon/smallplus.svg'  

  }
  
  @Component({
    selector: 'dialog-content-example-dialog',
    templateUrl: './dialog-content-example-dialog.html',
    styleUrls: ['./loyality-points.component.css']
  })
  export class DialogContentExampleDialog {}
  export class TabGroupStretchedExample {}
  
  





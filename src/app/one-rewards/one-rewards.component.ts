import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-one-rewards',
  templateUrl: './one-rewards.component.html',
  styleUrls: ['./one-rewards.component.css'],
})
export class OneRewardsComponent implements OnInit {
  //dialog: any;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentRewardsExampleDialog);
  }

  ngOnInit(): void {}
  imageSrc = '../../assets/icon/plus.svg';
  imageplus = '../../assets/icon/smallplus.svg';
}

@Component({
  selector: 'dialog-content-reward-example-dialog',
  templateUrl: './dialog-content-example-dialog1.html',
  styleUrls: ['./one-rewards.component.css']

  
})
export class DialogContentRewardsExampleDialog {}
export class TabGroupStretchedExample {}

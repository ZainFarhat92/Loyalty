import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';




@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(Dialogcontentexampledialog2);
  }

  ngOnInit(): void {}
  imageSrc = '../../assets/icon/plus.svg';
  imageplus = '../../assets/icon/smallplus.svg';

  
 
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','symbol1'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}


export class DialogusersContentExampleDialog {}
export interface PeriodicElement {
  name: string;
  position: string;
  weight: number;
  symbol: string;
  symbol1: string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 'User 1', name: 'User1@hotmail.com', weight: 100, symbol: 'Sep 30, 2021 12:05 PM', symbol1: 'Active'},
  {position: 'John Doe', name: 'Johndoe@hotmail.com', weight: 100, symbol: 'Sep 30, 2021 12:05 PM', symbol1: 'Active'},
  {position: 'John Doe', name: 'Johndoe@hotmail.com', weight: 100, symbol: 'Sep 30, 2021 12:05 PM', symbol1: 'Blocked'},
  {position: 'John Doe', name: 'Johndoe@hotmail.com', weight: 100, symbol: 'Sep 30, 2021 12:05 PM', symbol1: 'Blocked'},
  {position: 'User 2', name: 'User2@hotmail.com', weight: 100, symbol: 'Sep 30, 2021 12:05 PM', symbol1: 'Active'},
  {position: 'John Doe', name: 'Johndoe@hotmail.com', weight: 100, symbol: 'Sep 30, 2021 12:05 PM', symbol1: 'Active'},
  {position: 'John Doe', name: 'Johndoe@hotmail.com', weight: 100, symbol: 'Sep 30, 2021 12:05 PM', symbol1: 'Blocked'},
  {position: 'John Doe', name: 'Johndoe@hotmail.com', weight: 100, symbol: 'Sep 30, 2021 12:05 PM', symbol1: 'Blocked'},
  {position: 'User 3', name: 'User3@hotmail.com', weight: 100, symbol: 'Sep 30, 2021 12:05 PM', symbol1: 'Active'},
  {position: 'John Doe', name: 'Johndoe@hotmail.com', weight: 100, symbol: 'Sep 30, 2021 12:05 PM', symbol1: 'Active'},
  {position: 'John Doe', name: 'Johndoe@hotmail.com', weight: 100, symbol: 'Sep 30, 2021 12:05 PM', symbol1: 'Blocked'},
  {position: 'John Doe', name: 'Johndoe@hotmail.com', weight: 100, symbol: 'Sep 30, 2021 12:05 PM', symbol1: 'Blocked'},
  
];


export class ToolbarOverviewExample {}

export class ButtonOverviewExample {}
 

@Component({
  selector: 'dialog-content-reward-example-dialog',
  templateUrl: './dialog-content-example-dialog2.html',
  styleUrls: ['./users.component.css']

  
})
export class Dialogcontentexampledialog2 {}
export class TabGroupStretchedExample {}





import { Component, OnInit } from '@angular/core';
import {AfterViewInit,ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';




@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {

  

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(Dialogcontentexampledialog3);
  }

  ngOnInit(): void {}
  imageSrc = '../../assets/icon/plus.svg';
  imageplus = '../../assets/icon/smallplus.svg';


  displayedColumns: string[] = ['position', 'name', 'weight'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  

}

export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 'Admin 1', name: 'Admin1@hotmail.com', weight: 'Full' },
  {position: 'John Doe', name: 'Johndoe@hotmail.com', weight: 'Limited' },
  {position: 'John Doe', name: 'Johndoe@hotmail.com', weight: 'Limted' },
  {position: 'John Doe', name: 'Johndoe@hotmail.com', weight: 'Full' },
  {position: 'Admin 1', name: 'Admin1@hotmail.com', weight: 'Full' },
  {position: 'John Doe', name: 'Johndoe@hotmail.com', weight: 'Limited' },
  {position: 'John Doe', name: 'Johndoe@hotmail.com', weight: 'Limted' },
  {position: 'John Doe', name: 'Johndoe@hotmail.com', weight: 'Full' },
  {position: 'Admin 1', name: 'Admin1@hotmail.com', weight: 'Full' },
  {position: 'John Doe', name: 'Johndoe@hotmail.com', weight: 'Limited' },
  {position: 'John Doe', name: 'Johndoe@hotmail.com', weight: 'Limted' },
  {position: 'John Doe', name: 'Johndoe@hotmail.com', weight: 'Full' },
  
  
];


@Component({
  selector: 'dialog-content-reward-example-dialog',
  templateUrl: './dialog-content-example-dialog3.html',
  styleUrls: ['./admins.component.css']

  
})
export class Dialogcontentexampledialog3 {}
export class TabGroupStretchedExample {}



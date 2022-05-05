import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 12343, name: 'User', weight: 'Sep 30, 2021 12:05 PM', symbol: 'Sep 30, 2021 12:05 PM'},
  {position: 12343, name: 'User', weight: 'Sep 30, 2021 12:05 PM', symbol: 'Sep 30, 2021 12:05 PM'},
  {position: 12343, name: 'User', weight: 'Sep 30, 2021 12:05 PM', symbol: 'Sep 30, 2021 12:05 PM'},
  {position: 12343, name: 'User', weight: 'Sep 30, 2021 12:05 PM', symbol: 'Sep 30, 2021 12:05 PM'},

];




@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  


  ngOnInit(): void {
  }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['userName', 'age'];
  
}




  
import { Component, OnInit } from '@angular/core';
import { ITable } from 'src/app/Services/TableService/TableInterface/TableInterface';
import { TableService } from '../Services/TableService/table-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-tables',
  templateUrl: './list-tables.component.html',
  styleUrls: ['./list-tables.component.css']
})
export class ListTablesComponent implements OnInit {
 
 Tables: ITable[] = [];
  constructor(private tableServices : TableService, private router : Router) { }

  ngOnInit(): void {
    this.tableServices.ListTable().subscribe((result) => {
      this.Tables = result;
      console.log(this.Tables);
    })
  }
  goToReservation(Id : number){
    this.router.navigate(['/book',Id]);
    console.log(Id);
  }
   

}

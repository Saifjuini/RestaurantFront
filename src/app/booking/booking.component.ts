import { Component, OnInit } from '@angular/core';
import { IbookTable } from '../Services/TableService/TableInterface/UserBookTable';
import { TableService } from '../Services/TableService/table-service.service';
import { ActivatedRoute } from '@angular/router';
import { ITable } from '../Services/TableService/TableInterface/TableInterface';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  Books: IbookTable[] = [];
  Tables: ITable[] = [];

  bookTable: IbookTable = {
    name: '',
    lastName: '',
    phone: 0,
    numberOfPersons: 0,
    email: '',
    date: null,
    availableTable: {} as ITable[],
  };
  selectedTableId!: number;

  constructor(private tableService: TableService, private routes: ActivatedRoute) {}

  ngOnInit(): void {
    this.selectedTableId = Number(this.routes.snapshot.paramMap.get('id'));
    console.log(this.selectedTableId);

    this.tableService.GetTableById(this.selectedTableId).subscribe({
      next: (result) => {
        console.log(result);
        this.Tables = result;
        this.bookTable.availableTable = this.Tables; // Directly set the availableTable to the result
        console.log('this is data insdide',this.bookTable.availableTable);

        // Call the BookTable method here to ensure data is available before proceeding
        
      
      },
      error: (error) => {
        console.log('Error fetching table:', error);
      }
    });
  }

  BookTable(): void {
    console.log('bookTable before API call:', this.bookTable);
    console.log(this.bookTable);
    

    this.tableService.BookTable(this.bookTable).subscribe({
      next: (result) => {
        console.log('booking went successfully');
        console.log(this.bookTable);
      },
      error: (error) => {
        console.log('error when making the booking ', error);
      }
    });
  }
}

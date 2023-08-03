import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITable } from './TableInterface/TableInterface';
import { IbookTable } from './TableInterface/UserBookTable';

@Injectable({
  providedIn: 'root'
})
export class TableService{

  constructor(private http : HttpClient) { }

  public ListTable():Observable<ITable[]>{
    return this.http.get<ITable[]>(`http://localhost:8080/book/tableList`)
  }
  public GetTableById(id: number): Observable<ITable[]> {
    return this.http.get<ITable[]>(`http://localhost:8080/book/getTableById/${id}`);
  }

  public BookTable(bookTable : IbookTable):Observable<IbookTable[]>{
    return this.http.post<IbookTable[]>(`http://localhost:8080/bookTable/bookingTable`,bookTable)
  }
}

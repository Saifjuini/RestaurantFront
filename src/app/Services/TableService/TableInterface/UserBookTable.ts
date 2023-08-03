import { ITable } from "./TableInterface";

 export interface IbookTable {
     name: string;
     lastName: string;
     phone: number;
     numberOfPersons: number;
     email: string;
     date: Date | null;
     availableTable: Omit<ITable , 'id'>[];
   } 
import { Status } from "../Enumeration/Status";
import { TableCategory } from "../Enumeration/TableCategory";

export interface ITable{
  id:number;
  description:String;
  status:Status;
  tableType:TableCategory;
  tablePicture:String;
 
}
import { Category } from "../Enumeration/Category";

export interface IProduct{

    _id:number;
    productName:String;
    productDescription:String;
    productPrice:number;
    productPicture:String;
    productCategory:Category;

}
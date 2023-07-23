import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Services/ProductService/Enumeration/Category';
import { IProduct } from 'src/app/Services/ProductService/ProductInterface/productInterface';
import { ProductService } from 'src/app/Services/ProductService/product-service.service';

@Component({
  selector: 'app-food-product',
  templateUrl: './food-product.component.html',
  styleUrls: ['./food-product.component.css']
})
export class FoodProductComponent implements OnInit {
  products : IProduct[] =[]
  selectedCategory!: Category;

 
    constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.productService.ListProduct().subscribe((result)=> {
      this.products=result;
      console.log(this.products);
    });
    }
   
    pickCategory(categoryValue: string): void {
      const categoryKey: keyof typeof Category = categoryValue.toLowerCase() as keyof typeof Category;
      this.selectedCategory = Category[categoryKey];
      
      this.productService.getProductsByCategory(this.selectedCategory).subscribe((result) => {
        this.products = result;
        console.log(this.products);
      });
    }
}

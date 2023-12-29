import { Component } from '@angular/core';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent {
  
  public total: number = 10;
  public displayMode: string = 'grid';
  public products: any[] = [
    {
      id: 1,
      name: "Product 1",
      price: 2000,
      slug: "product-1",
      description: "description",
      img: "../../../../assets/img/product-1.jpg"
    },
    {
      id: 2,
      name: "Product 1",
      price: 2000,
      slug: "product-1",
      description: "description",
      img: "../../../../assets/img/product-1.jpg"
    },
    {
      id: 3,
      name: "Product 1",
      price: 2000,
      slug: "product-1",
      description: "description",
      img: "../../../../assets/img/product-1.jpg"
    },
    {
      id: 4,
      name: "Product 1",
      price: 2000,
      slug: "product-1",
      description: "description",
      img: "../../../../assets/img/product-1.jpg"
    },
    {
      id: 5,
      name: "Product 1",
      price: 2000,
      slug: "product-1",
      description: "description",
      img: "../../../../assets/img/product-1.jpg"
    },
    {
      id: 6,
      name: "Product 1",
      price: 2000,
      slug: "product-1",
      description: "description",
      img: "../../../../assets/img/product-1.jpg"
    },
    {
      id: 7,
      name: "Product 1",
      price: 2000,
      slug: "product-1",
      description: "description",
      img: "../../../../assets/img/product-1.jpg"
    },
    {
      id: 8,
      name: "Product 1",
      price: 2000,
      slug: "product-1",
      description: "description",
      img: "../../../../assets/img/product-1.jpg"
    },
    {
      id: 9,
      name: "Product 1",
      price: 2000,
      slug: "product-1",
      description: "description",
      img: "../../../../assets/img/product-1.jpg"
    }
  ]

}

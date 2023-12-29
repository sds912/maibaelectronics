import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

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
    }
  ]

}

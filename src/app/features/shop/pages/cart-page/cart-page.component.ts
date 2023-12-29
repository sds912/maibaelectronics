import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent {


  public carts: any[] = [
    {
      id: 1,
      product: {
        id: 1,
        name: "Product 1",
        price: 2000,
        slug: "product-1",
        description: "description",
        img: "../../../../assets/img/product-1.jpg"
      },
      quantity: 2
    },
    {
      id: 2,
      product: {
        id: 2,
        name: "Product 1",
        price: 2000,
        slug: "product-1",
        description: "description",
        img: "../../../../assets/img/product-1.jpg"
      },
      quantity: 2
    },
    {
      id: 3,
      product: {
        id: 2,
        name: "Product 1",
        price: 2000,
        slug: "product-1",
        description: "description",
        img: "../../../../assets/img/product-1.jpg"
      },
      quantity: 2
    },
    {
      id: 3,
      product: {
        id: 1,
        name: "Product 1",
        price: 2000,
        slug: "product-1",
        description: "description",
        img: "../../../../assets/img/product-1.jpg"
      },
      quantity: 2
    }
  ]


  increase(cart: any){
      this.carts.filter(c => c.id === cart?.id)[0]!.quantity += 1;
  }

  decrease(cart: any){
    if(cart?.quantity >= 1){
      this.carts.filter(c => c.id === cart?.id)[0]!.quantity -= 1;
    }
  }

  getTotal(carts: any []): number{
    let total: number = 0;
    carts.forEach((c: any) => {
      total += c!.quantity*c!.product!.price!
    })

    return total;
  }

}

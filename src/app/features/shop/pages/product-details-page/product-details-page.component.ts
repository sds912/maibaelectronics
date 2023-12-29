import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.scss']
})
export class ProductDetailsPageComponent {

  public product: any = {
    id: 1,
    name: "Product 1",
    price: 2000,
    slug: "product-1",
    description: "Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.",
    img: "../../../../assets/img/product-1.jpg"
  }

}

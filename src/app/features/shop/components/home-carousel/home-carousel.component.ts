import { Component } from '@angular/core';

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.scss']
})
export class HomeCarouselComponent {

  public carousels: any[] = [
    {
      id: 1,
      title: '',
      description: '',
      link: '',
      img: '../../../../assets/img/offer-1.jpg'
    },
    {
      id: 2,
      title: '',
      description: '',
      link: '',
      img: '../../../../assets/img/offer-2.jpg'
    }
  ]

  public offers: any[] = [
    {
      id: 1,
      percent: 20,
      link: '',
      img: '../../../../../assets/img/offer-1.jpg',
      name: 'Nom produit'
    },
    {
      id: 2,
      percent: 30,
      link: '',
      img: '../../../../../assets/img/offer-1.jpg',
      name: 'Nom produit'
    }
  ]

}

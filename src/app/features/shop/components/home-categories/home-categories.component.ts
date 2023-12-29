import { Component } from '@angular/core';

@Component({
  selector: 'app-home-categories',
  templateUrl: './home-categories.component.html',
  styleUrls: ['./home-categories.component.scss']
})
export class HomeCategoriesComponent {

  public categories: any[] = [
    {
      id: 1,
      name: "Téléphones",
      img: "../../../../assets/img/cat-1.jpg",
      nb: 23
    },
    {
      id: 2,
      name: "Téléviseurs",
      img: "../../../../assets/img/cat-1.jpg",
      nb: 23
    },
    {
      id: 3,
      name: "Vidéos",
      img: "../../../../assets/img/cat-1.jpg",
      nb: 23
    },
    {
      id: 4,
      name: "Electro-ménagers",
      img: "../../../../assets/img/cat-1.jpg",
      nb: 23
    },
    {
      id: 5,
      name: "Ordinateurs",
      img: "../../../../assets/img/cat-1.jpg",
      nb: 23
    },
    {
      id: 6,
      name: "Caméras",
      img: "../../../../assets/img/cat-1.jpg",
      nb: 23
    },
    {
      id: 7,
      name: "Ecouteurs",
      img: "../../../../assets/img/cat-1.jpg",
      nb: 23
    },
    {
      id: 8,
      name: "Accessoirs",
      img: "../../../../assets/img/cat-1.jpg",
      nb: 23
    }
  ]

}

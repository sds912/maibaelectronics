import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ShopService } from '../../shop.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit{

  public newsletterForm?: FormGroup;

  constructor(private fb: FormBuilder, private shopService: ShopService){}


  ngOnInit(): void {
    this.newsletterForm = this.fb.group({
      email: ["", [Validators.email, Validators.required]]
    })
  }


  onSubmit(){
     this.shopService.subscribeNewsletter(this.newsletterForm?.value)
     .subscribe(
      (response) => {
         
      },
      (error) =>{

      }
     )
  }

}

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit{

 public loginForm?: FormGroup;
 public registerForm?: FormGroup;
 public isSign = false;

  constructor(private fb: FormBuilder, private authService: AuthService){}

 ngOnInit(): void {
   this.loginForm = this.fb.group({
    email:    ["", [Validators.required, Validators.email]],
    password: ["", [Validators.min(6), Validators.required]]
   })
   this.registerForm = this.fb.group({
    email:    ["", [Validators.required, Validators.email]],
    name:     ["", [Validators.required]],
    phone:    ["", [Validators.min(9), Validators.max(9), Validators.required]],
    password: ["", [Validators.min(6), Validators.required]],
    confirm:  ["", [Validators.min(6), Validators.required]],
   })
 }


 onLogin(){
    this.authService.login(this.loginForm?.value)
    .subscribe(
      (response) =>{

      },
      (error) => {
        
      }
    )
 }

 
 onRegister(){
  this.authService.register(this.registerForm?.value)
  .subscribe(
    (response) =>{

    },
    (error) => {
      
    }
  )
}

}

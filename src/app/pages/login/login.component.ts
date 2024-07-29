import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
// onSubmit() {
// throw new Error('Method not implemented.');
// }
  
  constructor(private router: Router){}

  GoToLogin(){
    this.router.navigate(['/'])
  }
  
  //Template driven forms

  // onSubmit(form:NgForm){
  //   console.log(form.value);
  // }



  //Reactive forms
  loginForm!: FormGroup
 
  ngOnInit(): void {
 
    this.loginForm = new FormGroup(
      {
        email: new FormControl('',[Validators.required,Validators.email]),
        password: new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(10)])
      }
    )
 
  }

  onSubmit(){
    console.log(this.loginForm.value);
  }

}

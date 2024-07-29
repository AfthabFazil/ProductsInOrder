import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  standalone:true,
  imports:[ReactiveFormsModule,CommonModule]
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  passwordCriteria = {
    minLength: false,
    uppercase: false,
    number: false,
    specialChar: false,
    noSpaces: false
  };
  passwordFieldTouched = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]]
    });
  }

  validatePassword() {
    const password = this.signupForm.get('password')?.value;
    this.passwordCriteria.minLength = password.length >= 8 && password.length <= 20;
    this.passwordCriteria.uppercase = /[A-Z]/.test(password);
    this.passwordCriteria.number = /[0-9]/.test(password);
    this.passwordCriteria.specialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    this.passwordCriteria.noSpaces = !(/\s/.test(password));
  }

  markTouched() {
    this.passwordFieldTouched = true;
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log('Form Submitted!', this.signupForm.value);
    }
  }
}
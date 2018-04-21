import { Component, OnInit } from '@angular/core';
import { MatInput } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  createForm() {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      referral: '',
      submit: ['Submit']
    }, { validator: this.passwordsMatch });
  }
  passwordsMatch(registerForm: FormGroup) {
    //console.log('running');
    if (registerForm.get('password').value == registerForm.get('confirmPassword').value) {
      return null;
    }
    else {
      
      return { 'passwordsMatch': 'Your passwords must match' };
    }
  }
  onSubmit() {
    

  }
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

}

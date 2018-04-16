import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  createForm() {
    this.registerForm = this.fb.group({
      firstName: [''],
      lastName:[''],
      email: ['', Validators.email],
      password1:[''],
      password2:[''],
      referral:[''],
      submit:['Submit']
    });
  }
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

}

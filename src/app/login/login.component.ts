import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";
import {NgClass, NgIf, UpperCasePipe} from "@angular/common";
import {PasswordModule} from "primeng/password";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    NgIf,
    UpperCasePipe,
    NgClass,
    PasswordModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit, OnDestroy {
  authService = inject(AuthService);
  fb = inject(FormBuilder);
  router= inject(Router);
  user: any;
  isWrongPassword = false;
  constructor() {
    this.user = localStorage.getItem('session');
    this.user = this.user ? JSON.parse(this.user) : this.user;
  }
  ngOnInit(): void {
  }
  loginForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  })
  submit(){
    this.user = this.authService.login(
      this.loginForm.value.username,
      this.loginForm.value.password
    );
    if(!this.user){
      this.isWrongPassword = true;
    } else {
      this.isWrongPassword = false;
      this.router.navigateByUrl('/').then(r => console.log(r));
      location.reload();
    }
  }

  ngOnDestroy(): void {
  }
}

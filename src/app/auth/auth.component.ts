import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  password: string;
  username: string;
  isLoginMode: boolean;

  constructor(private authservice: AuthService, private router: Router) {
    this.password = '';
    this.username = '';
    this.isLoginMode = true;
  }

  onclickSwitch() {
    this.isLoginMode = !this.isLoginMode;
  }

  onclickSubmit() {
    this.isLoginMode ?
      this.authservice.signin(this.username, this.password)
        .subscribe(
          data => {
            console.log(data);
            localStorage.setItem('token', data.token);
            this.router.navigate(['notes']);
          },
          error => {
            console.log(error);
          })
      : this.authservice.signup(this.username, this.password)
        .subscribe(
          data => {
            console.log(data);
            localStorage.setItem('token', data.token);
          },
          error => {
            console.log(error);
          });
  }

  ngOnInit(): void {
  }

}


import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { user } from '../model/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 Newuser = new user();

  constructor(private LoginService: LoginService, private router : Router) { }

  ngOnInit(): void {}

  auth(){
    this.LoginService.authentifier(this.Newuser)
    .subscribe(c => {
    console.log(c);
    });
  }
}





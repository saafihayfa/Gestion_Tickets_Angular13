
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { user } from '../model/user.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 Newuser = new user();
 public loginForm! : FormGroup ;

  constructor(private LoginService: LoginService,private http :HttpClient, private router : Router, private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.loginForm= this.formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required]
     })
  }

auth(){
  this.LoginService.authentifier(this.Newuser)
  .subscribe(c => {
    this.router.navigate(['accueil']);
   alert("vous etes bien connecté " );
   localStorage.setItem('token', JSON.stringify(c.usertoken));
   console.log(c);
 } , err => alert("Nom Utilisateur/Mot de passe invalides"));

  }

}





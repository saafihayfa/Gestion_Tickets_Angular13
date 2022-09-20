
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { user } from '../model/user.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ticket } from '../model/ticket.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 Newuser = new user();
 public loginForm! : FormGroup ;

  constructor(private LoginService: LoginService,private http :HttpClient, private router : Router, private formBuilder : FormBuilder, private _user:user) { }

  ngOnInit(): void {
    this.loginForm= this.formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required]
     })
  }

auth(){
  this.LoginService.authentifier(this.Newuser)
  .subscribe(c => {
    this.router.navigate(['alltickets']);
   alert("vous etes bien connecté " );
   localStorage.setItem('token', c.token)
   localStorage.setItem('name', c.userName)
   localStorage.setItem('idUser', (c.idUser).toString())
   console.log(c);
 } , err => alert("Nom Utilisateur/Mot de passe invalides"));

  }

}


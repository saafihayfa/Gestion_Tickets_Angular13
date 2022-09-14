import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar1',
  templateUrl: './navbar1.component.html',
  styleUrls: ['./navbar1.component.css']
})
export class Navbar1Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout (){
    localStorage.clear();
    this.router.navigate(['alltickets']);
  }

}

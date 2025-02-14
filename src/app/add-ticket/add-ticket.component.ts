import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ticket } from '../model/ticket.model';
import {user} from '../model/user.model'
import { AllticketsService } from '../services/alltickets.service';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent implements OnInit {

  NewTicket = new ticket();
  IdList: Array<user> = [];


  constructor(private AllticketsService: AllticketsService, private router : Router ) { }

  ngOnInit(): void {

    //var nomticket = prompt("Entrez  nomticket: ", "");
    //var statusticket = prompt("Entrez status : ", "");
    //document.write("Vous avez entré: " + "");
  }

  addTicket(){
    this.AllticketsService.ajouterTicket(this.NewTicket)
    .subscribe(t=> {
    console.log(t);
    alert ("ticket ajouté ")
    this.router.navigate(['alltickets']);
    })
    }

    getAllIdTicket(){
     this.AllticketsService.listerId().subscribe(id=>{
        console.log(id);
        this.IdList= id;

      })

    }

}

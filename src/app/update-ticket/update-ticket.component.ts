import { Component, OnInit } from '@angular/core';
import { ticket } from '../model/ticket.model';
import { AllticketsService } from '../services/alltickets.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-update-ticket',
  templateUrl: './update-ticket.component.html',
  styleUrls: ['./update-ticket.component.css']
})
export class UpdateTicketComponent implements OnInit {

 spectick = new ticket  () ;


  constructor(private AllticketsService: AllticketsService,
              private router : Router,
              private ActivatedRoute: ActivatedRoute)
        { }

  ngOnInit(): void {

    this.AllticketsService.consulterTicket(this.ActivatedRoute.snapshot.params['id']).
    subscribe( tick =>{ this.spectick = tick; } ) ;

  }

  modifticket() {
    this.AllticketsService.modifierTicket(this.spectick)
    .subscribe( t=> {
    this.router.navigate(['alltickets']);
    alert ("ticket modifié ");
    console.log(t);
    },
    err => { alert("Problème lors de la modification !");}
    );
    }


}

import { Component, OnInit } from '@angular/core';
import { ticket } from '../model/ticket.model';
import { AllticketsService } from '../services/alltickets.service';
import { Router, RouterLink} from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-alltickets',
  templateUrl: './alltickets.component.html',
  styleUrls: ['./alltickets.component.css']
})
export class AllticketsComponent implements OnInit {

  tick !:ticket[]  ;
 searchtext!: any;
  constructor(private AllticketsService: AllticketsService, private router : Router) { }

  ngOnInit(): void {

    this.AllticketsService.listerTicket().subscribe( data => {
      this.tick=data
      console.log(data);
      } );
  }

  supprimTicket(t: ticket)
  {
      let conf = confirm("Etes-vous sûr de supprimer ce ticket ?");
       if (conf)
           this.AllticketsService.supprimerTicket(t.idTicket).subscribe(() => {
               console.log(" Ticket supprimé");
               alert("Ticket supprimé");
               this.SupprimTicketDuTableau(t);
              });
            }

  SupprimTicketDuTableau(t : ticket) {
     this.tick.forEach((cur, index) => {
         if(t.idTicket===cur.idTicket) {
             this.tick.splice(index, 1);
         }
     });
    }
}

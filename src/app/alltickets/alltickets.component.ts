import { Component, OnInit } from '@angular/core';
import { ticket } from '../model/ticket.model';
import { AllticketsService } from '../services/alltickets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alltickets',
  templateUrl: './alltickets.component.html',
  styleUrls: ['./alltickets.component.css']
})
export class AllticketsComponent implements OnInit {

  tick !:ticket[]  ;

  constructor(private AllticketsService: AllticketsService, private router : Router) { }

  ngOnInit(): void {

    this.AllticketsService.listerTicket().subscribe( data => {
      this.tick=data
      console.log(data);
      } );

  }

}

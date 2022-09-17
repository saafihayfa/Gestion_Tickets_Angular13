import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentTicketComponent } from './sent-ticket.component';

describe('SentTicketComponent', () => {
  let component: SentTicketComponent;
  let fixture: ComponentFixture<SentTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SentTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

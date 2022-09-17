import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaffecTicketComponent } from './notaffec-ticket.component';

describe('NotaffecTicketComponent', () => {
  let component: NotaffecTicketComponent;
  let fixture: ComponentFixture<NotaffecTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotaffecTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotaffecTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

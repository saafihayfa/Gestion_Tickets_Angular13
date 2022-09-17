import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherTicketComponent } from './other-ticket.component';

describe('OtherTicketComponent', () => {
  let component: OtherTicketComponent;
  let fixture: ComponentFixture<OtherTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

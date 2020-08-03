import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Concierto6Component } from './concierto6.component';

describe('Concierto6Component', () => {
  let component: Concierto6Component;
  let fixture: ComponentFixture<Concierto6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Concierto6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Concierto6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Concierto4Component } from './concierto4.component';

describe('Concierto4Component', () => {
  let component: Concierto4Component;
  let fixture: ComponentFixture<Concierto4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Concierto4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Concierto4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

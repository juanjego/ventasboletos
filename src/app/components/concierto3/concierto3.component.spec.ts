import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Concierto3Component } from './concierto3.component';

describe('Concierto3Component', () => {
  let component: Concierto3Component;
  let fixture: ComponentFixture<Concierto3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Concierto3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Concierto3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

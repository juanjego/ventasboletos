import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Concierto2Component } from './concierto2.component';

describe('Concierto2Component', () => {
  let component: Concierto2Component;
  let fixture: ComponentFixture<Concierto2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Concierto2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Concierto2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

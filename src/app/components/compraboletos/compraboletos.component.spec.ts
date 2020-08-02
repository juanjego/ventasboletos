import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraboletosComponent } from './compraboletos.component';

describe('CompraboletosComponent', () => {
  let component: CompraboletosComponent;
  let fixture: ComponentFixture<CompraboletosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraboletosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraboletosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoCComponent } from './catalogo-c.component';

describe('CatalogoCComponent', () => {
  let component: CatalogoCComponent;
  let fixture: ComponentFixture<CatalogoCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogoCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

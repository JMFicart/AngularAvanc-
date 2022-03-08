import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoPanierComponent } from './exo-panier.component';

describe('ExoPanierComponent', () => {
  let component: ExoPanierComponent;
  let fixture: ComponentFixture<ExoPanierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExoPanierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoPanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

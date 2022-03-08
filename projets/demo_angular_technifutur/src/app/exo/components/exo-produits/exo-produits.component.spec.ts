import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoProduitsComponent } from './exo-produits.component';

describe('ExoProduitsComponent', () => {
  let component: ExoProduitsComponent;
  let fixture: ComponentFixture<ExoProduitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExoProduitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

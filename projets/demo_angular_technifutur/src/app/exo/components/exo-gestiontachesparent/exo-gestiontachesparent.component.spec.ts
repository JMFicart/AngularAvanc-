import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoGestiontachesparentComponent } from './exo-gestiontachesparent.component';

describe('ExoGestiontachesparentComponent', () => {
  let component: ExoGestiontachesparentComponent;
  let fixture: ComponentFixture<ExoGestiontachesparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExoGestiontachesparentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoGestiontachesparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

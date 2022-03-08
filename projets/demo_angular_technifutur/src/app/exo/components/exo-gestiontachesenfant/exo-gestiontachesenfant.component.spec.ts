import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoGestiontachesenfantComponent } from './exo-gestiontachesenfant.component';

describe('ExoGestiontachesenfantComponent', () => {
  let component: ExoGestiontachesenfantComponent;
  let fixture: ComponentFixture<ExoGestiontachesenfantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExoGestiontachesenfantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoGestiontachesenfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoGestiontachesenfantItemComponent } from './exo-gestiontachesenfant-item.component';

describe('ExoGestiontachesenfantItemComponent', () => {
  let component: ExoGestiontachesenfantItemComponent;
  let fixture: ComponentFixture<ExoGestiontachesenfantItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExoGestiontachesenfantItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoGestiontachesenfantItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

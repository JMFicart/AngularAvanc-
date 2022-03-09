import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoObjectif1Component } from './exo-objectif1.component';

describe('ExoObjectif1Component', () => {
  let component: ExoObjectif1Component;
  let fixture: ComponentFixture<ExoObjectif1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExoObjectif1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoObjectif1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoObjectif2Component } from './exo-colorswap.component';

describe('ExoObjectif2Component', () => {
  let component: ExoObjectif2Component;
  let fixture: ComponentFixture<ExoObjectif2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExoObjectif2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoObjectif2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

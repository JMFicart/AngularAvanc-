import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoPlatComponent } from './exo-plat.component';

describe('ExoPlatComponent', () => {
  let component: ExoPlatComponent;
  let fixture: ComponentFixture<ExoPlatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExoPlatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoPlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoChildren2Component } from './exo-children2.component';

describe('ExoChildren2Component', () => {
  let component: ExoChildren2Component;
  let fixture: ComponentFixture<ExoChildren2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExoChildren2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoChildren2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

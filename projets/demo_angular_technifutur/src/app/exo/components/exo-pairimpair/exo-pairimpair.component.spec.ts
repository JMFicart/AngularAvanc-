import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoPairimpairComponent } from './exo-pairimpair.component';

describe('ExoPairimpairComponent', () => {
  let component: ExoPairimpairComponent;
  let fixture: ComponentFixture<ExoPairimpairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExoPairimpairComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoPairimpairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

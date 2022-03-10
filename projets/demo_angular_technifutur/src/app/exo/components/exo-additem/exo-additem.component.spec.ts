import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoAdditemComponent } from './exo-additem.component';

describe('ExoAdditemComponent', () => {
  let component: ExoAdditemComponent;
  let fixture: ComponentFixture<ExoAdditemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExoAdditemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoAdditemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

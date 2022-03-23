import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoChildrenComponent } from './exo-children.component';

describe('ExoChildrenComponent', () => {
  let component: ExoChildrenComponent;
  let fixture: ComponentFixture<ExoChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExoChildrenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

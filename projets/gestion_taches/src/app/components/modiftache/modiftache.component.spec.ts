import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModiftacheComponent } from './modiftache.component';

describe('ModiftacheComponent', () => {
  let component: ModiftacheComponent;
  let fixture: ComponentFixture<ModiftacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModiftacheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModiftacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

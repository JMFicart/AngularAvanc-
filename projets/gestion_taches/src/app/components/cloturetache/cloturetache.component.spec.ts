import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloturetacheComponent } from './cloturetache.component';

describe('CloturetacheComponent', () => {
  let component: CloturetacheComponent;
  let fixture: ComponentFixture<CloturetacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloturetacheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloturetacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

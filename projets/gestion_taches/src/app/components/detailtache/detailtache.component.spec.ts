import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailtacheComponent } from './detailtache.component';

describe('DetailtacheComponent', () => {
  let component: DetailtacheComponent;
  let fixture: ComponentFixture<DetailtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailtacheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

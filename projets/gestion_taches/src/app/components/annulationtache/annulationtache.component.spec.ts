import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnulationtacheComponent } from './annulationtache.component';

describe('AnnulationtacheComponent', () => {
  let component: AnnulationtacheComponent;
  let fixture: ComponentFixture<AnnulationtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnulationtacheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnulationtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

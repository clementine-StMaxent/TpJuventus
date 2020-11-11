import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlockerMaillotComponent } from './flocker-maillot.component';

describe('FlockerMaillotComponent', () => {
  let component: FlockerMaillotComponent;
  let fixture: ComponentFixture<FlockerMaillotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlockerMaillotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlockerMaillotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

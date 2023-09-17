import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScientistDetailsComponent } from './scientist-details.component';

describe('ScientistDetailsComponent', () => {
  let component: ScientistDetailsComponent;
  let fixture: ComponentFixture<ScientistDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScientistDetailsComponent]
    });
    fixture = TestBed.createComponent(ScientistDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeciesSpecificComponent } from './species-specific.component';

describe('SpeciesSpecificComponent', () => {
  let component: SpeciesSpecificComponent;
  let fixture: ComponentFixture<SpeciesSpecificComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpeciesSpecificComponent]
    });
    fixture = TestBed.createComponent(SpeciesSpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

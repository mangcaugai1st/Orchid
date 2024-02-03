import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenusComponent } from './genus.component';

describe('GeneraComponent', () => {
  let component: GenusComponent;
  let fixture: ComponentFixture<GenusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenusComponent]
    });
    fixture = TestBed.createComponent(GenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

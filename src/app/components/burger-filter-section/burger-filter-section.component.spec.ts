import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerFilterSectionComponent } from './burger-filter-section.component';

describe('BurgerFilterSectionComponent', () => {
  let component: BurgerFilterSectionComponent;
  let fixture: ComponentFixture<BurgerFilterSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BurgerFilterSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurgerFilterSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailsHolderComponent } from './order-details-holder.component';

describe('OrderDetailsHolderComponent', () => {
  let component: OrderDetailsHolderComponent;
  let fixture: ComponentFixture<OrderDetailsHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderDetailsHolderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderDetailsHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

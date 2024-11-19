import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixedPaymentComponent } from './mixed-payment.component';

describe('MixedPaymentComponent', () => {
  let component: MixedPaymentComponent;
  let fixture: ComponentFixture<MixedPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MixedPaymentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MixedPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

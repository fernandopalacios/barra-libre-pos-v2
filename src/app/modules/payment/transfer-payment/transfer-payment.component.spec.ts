import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferPaymentComponent } from './transfer-payment.component';

describe('TransferPaymentComponent', () => {
  let component: TransferPaymentComponent;
  let fixture: ComponentFixture<TransferPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransferPaymentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

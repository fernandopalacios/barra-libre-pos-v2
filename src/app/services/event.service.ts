import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  
  private addProductEvent = new BehaviorSubject<any>({});
  private setPaymentMethodEvent = new BehaviorSubject<any>({});

  constructor() { }

  emitAddProductEvent(message: any) {
    this.addProductEvent.next(message);
  }

  addProductEventListener(){
    return this.addProductEvent.asObservable();
  }

  emitSetPaymentMethodEvent(message: any) {
    this.setPaymentMethodEvent.next(message);
  }

  setPaymentMethodEventListener() {
    return this.setPaymentMethodEvent.asObservable();
  }


}

import { Injectable } from '@angular/core';
import { BehaviorSubject, bufferToggle } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  
  private addProductEvent = new BehaviorSubject<any>({});
  private setPaymentMethodEvent = new BehaviorSubject<any>({});
  private setOrderTypeEvent = new BehaviorSubject<any>({});
  private setOrderTableEvent = new BehaviorSubject<any>({});
  private displayTableAlert = new BehaviorSubject<any>({});

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

  emitSetOrderTypeEvent(message: any) {
    this.setOrderTypeEvent.next(message);
  }

  setOrderTypeEventListener() {
    return this.setOrderTypeEvent.asObservable();
  }

  emitSetOrderTable(message:any) {
    this.setOrderTableEvent.next(message);
  }

  setOrderTableListener() {
    return this.setOrderTableEvent.asObservable();
  }

  emitDisplayTableAlert(message:string) {
    this.displayTableAlert.next(message);
  }

  displayTableAlertListener() {
    return this.displayTableAlert.asObservable();
  }
}

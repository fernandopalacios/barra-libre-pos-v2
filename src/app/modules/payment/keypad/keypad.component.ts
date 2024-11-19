import { Component, Input, output } from '@angular/core';

@Component({
  selector: 'app-pos-keypad',
  standalone: false,
  templateUrl: './keypad.component.html',
  styleUrl: './keypad.component.scss'
})
export class KeypadComponent {
  @Input() allowDecimal: boolean = true;
  value: string = '';
  keypadValue = output<string>();

  clickKeypadButton() {
    this.keypadValue.emit(this.value);
  }
}

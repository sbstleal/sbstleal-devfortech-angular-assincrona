import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ex-contador',
  templateUrl: './ex-contador.component.html',
  styleUrls: ['./ex-contador.component.scss']
})
export class ExContadorComponent {

  @Input() val = 0;
  @Output() valUpdt = new EventEmitter();

  decr() {
    this.val = this.val - 1;
    this.valUpdt.emit(this.val);
  }

  incr() {
    this.val = this.val + 1;
    this.valUpdt.emit(this.val);
  }

  constructor() { }

}

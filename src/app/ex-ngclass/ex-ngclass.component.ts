import { Component } from '@angular/core';

@Component({
  selector: 'app-ex-ngclass',
  templateUrl: './ex-ngclass.component.html',
  styleUrls: ['./ex-ngclass.component.scss']
})
export class ExNgclassComponent {

  deveSerVerde = false;

  tornarVerde() {
    this.deveSerVerde = true;
  }

  constructor() { }

}

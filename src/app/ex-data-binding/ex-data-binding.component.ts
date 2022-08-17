import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex-data-binding',
  templateUrl: './ex-data-binding.component.html',
  styleUrls: ['./ex-data-binding.component.scss']
})
export class ExDataBindingComponent implements OnInit {

@Input() palavra: string | undefined;
@Input() color: string | undefined;

imageUrl = 'https://static9.depositphotos.com/1594920/1089/i/600/depositphotos_10890313-stock-photo-english-bulldog-11-months-old.jpg';

valorInc = 'Valor Inicial 5';

  constructor() { }

  ngOnInit(): void {
  }

}

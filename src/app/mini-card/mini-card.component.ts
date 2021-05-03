import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.css']
})
export class MiniCardComponent {
  @Input() icon: string="";
  @Input() title: string="";
  @Input() value: number=0;
  @Input() color: string="";
  @Input() isIncrease: boolean=true;
  @Input() isCurrency: boolean=false;
  @Input() duration: string="";
  @Input() percentValue: number=0;

  constructor() { }
}
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  @Input() products:any;
  @Output() myEvent  = new EventEmitter()



  eventTry(value:any){
    this.myEvent.emit(value)
  }
}
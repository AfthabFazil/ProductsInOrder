import { NgOptimizedImage } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  @Input() products:any;

  //eventTry Event
  @Output() myEvent  = new EventEmitter()


  //showInfo Event

  eventTry(value:any){
    this.myEvent.emit(value)
  }


}
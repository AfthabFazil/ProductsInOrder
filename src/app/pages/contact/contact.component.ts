import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { HighlightDirective } from '../../highlight.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [DatePipe,HighlightDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  curDate = Date.now()
}

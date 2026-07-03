import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Card } from '../../models/card.model';
import { CardComponent } from '../card/card';

@Component({
  selector: 'app-reading',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './reading.html',
  styleUrl: './reading.scss',
})
export class Reading implements OnChanges {
  @Input() card!: Card;
  @Input() activeReading: 'general' | 'career' | 'health' | 'relationships' = 'general';

  @Output() reveal = new EventEmitter<void>();
  @Output() drawAnother = new EventEmitter<void>();

  revealed = false;

  ngOnChanges() {
    this.revealed = false;
  }

  onReveal() {
    this.revealed = true;
    this.reveal.emit();
  }
}

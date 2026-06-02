import { Component, Input } from '@angular/core';
import { Card } from '../../models/card.model';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class CardComponent {

  @Input() card!: Card;
  @Input() isReversed = false;
  @Input() readingType!: 'general' | 'career' | 'health' | 'relationships';

  flipped = false;

  toggleFlip() {
    this.flipped = !this.flipped;
  }

  getMeaning() {
    if (!this.flipped) return '';

    return this.isReversed
      ? this.card.reversedMeanings[this.readingType]
      : this.card.meanings[this.readingType];
  }
}
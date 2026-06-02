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

  isInverted = false;

  toggleInvert() {
    this.isInverted = !this.isInverted;
  }

  getMeanings() {
    return this.isInverted
      ? this.card.reversedMeanings
      : this.card.meanings;
  }
}
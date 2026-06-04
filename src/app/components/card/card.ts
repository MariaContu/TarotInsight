import { Component, Input, OnChanges } from '@angular/core';
import { Card } from '../../models/card.model';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class CardComponent implements OnChanges {
  @Input() card!: Card;

  isInverted = false;

  ngOnChanges() {
    this.isInverted = false;
  }

  toggleInvert() {
    this.isInverted = !this.isInverted;
  }

  getMeanings() {
    return this.isInverted ? this.card.reversedMeanings : this.card.meanings;
  }
}

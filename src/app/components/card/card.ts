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
  @Input() activeReading: 'general' | 'career' | 'health' | 'relationships' = 'general';

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

  getReadingLabel(): string {
    const labels = {
      general: 'Geral',
      career: 'Carreira',
      health: 'Saúde',
      relationships: 'Relacionamentos',
    };
    return labels[this.activeReading];
  }
}
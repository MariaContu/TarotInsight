import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../../models/card.model';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [],
  templateUrl: './history.html',
  styleUrl: './history.scss',
})
export class History {
  @Input() cards: Card[] = [];

  @Output() select = new EventEmitter<Card>();
  @Output() clear = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();
}

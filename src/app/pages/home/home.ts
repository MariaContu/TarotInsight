import { Component } from '@angular/core';
import { TarotService } from '../../services/tarot';
import { Card } from '../../models/card.model';
import { CardComponent } from '../../components/card/card';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './home.html',
})
export class HomeComponent {

  selectedCard?: Card;
  isReversed = false;

  selectedReading: 'general' | 'career' | 'health' | 'relationships' = 'general';

  constructor(private tarotService: TarotService) {}

  drawCard() {
    this.selectedCard = this.tarotService.getRandomCard();
    this.isReversed = Math.random() > 0.5;
  }
}
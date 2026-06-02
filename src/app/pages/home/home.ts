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

  isReversed = false;

  selectedReading: 'general' | 'career' | 'health' | 'relationships' = 'general';

  selectedArcana: 'all' | 'major' | 'minor' = 'all';

  selectedSuit: 'all' | 'cups' | 'swords' | 'wands' | 'pentacles' = 'all';

  allCards: Card[] = [];

  selectedCard?: Card;
  showModal = false;


  ngOnInit() {
    this.allCards = this.tarotService.getAllCards();
  }

  constructor(private tarotService: TarotService) {}

  openModal(card: Card) {
    this.selectedCard = card;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  drawCard() {
    this.selectedCard = this.tarotService.getRandomCard();
    this.showModal = true;
  }
}
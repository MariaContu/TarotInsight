import { Component } from '@angular/core';
import { TarotService } from '../../services/tarot';
import { Card } from '../../models/card.model';
import { CardComponent } from '../../components/card/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './home.html',
})
export class HomeComponent {
  allCards: Card[] = [];

  selectedCard?: Card;
  showModal = false;

  constructor(private tarotService: TarotService) {}

  ngOnInit() {
    this.allCards = this.tarotService.getAllCards();
  }

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

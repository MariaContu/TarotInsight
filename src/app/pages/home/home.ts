import { Component, OnInit } from '@angular/core';
import { TarotService } from '../../services/tarot';
import { Card } from '../../models/card.model';
import { CardComponent } from '../../components/card/card';
import { FiltersComponent } from '../../components/filters/filters';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, FiltersComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent implements OnInit {
  allCards: Card[] = [];
  filteredCards: Card[] = [];

  selectedCard?: Card;
  showModal = false;
  activeReading: 'general' | 'career' | 'health' | 'relationships' = 'general';

  constructor(private tarotService: TarotService) {}

  ngOnInit() {
    this.allCards = this.tarotService.getAllCards();
    this.filteredCards = this.allCards;
  }

  onFiltersChange(filters: { arcana: string; suit: string; reading: 'general' | 'career' | 'health' | 'relationships' }) {
    this.activeReading = filters.reading;

    this.filteredCards = this.allCards.filter(card => {
      const matchArcana = filters.arcana === 'all' || card.arcana === filters.arcana;
      const matchSuit = filters.suit === 'all' || card.suit === filters.suit;
      return matchArcana && matchSuit;
    });
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
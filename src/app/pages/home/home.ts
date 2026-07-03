import { Component, OnInit } from '@angular/core';
import { TarotService } from '../../services/tarot';
import { Card } from '../../models/card.model';
import { CardComponent } from '../../components/card/card';
import { FiltersComponent } from '../../components/filters/filters';
import { History } from '../../components/history/history';
import { Reading } from '../../components/reading/reading';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, FiltersComponent, History, Reading],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent implements OnInit {
  allCards: Card[] = [];
  filteredCards: Card[] = [];

  selectedCard?: Card;
  showModal = false;
  challengeMode = false;
  activeReading: 'general' | 'career' | 'health' | 'relationships' = 'general';

  historyList: Card[] = [];
  showHistory = false;

  constructor(private tarotService: TarotService) {}

  ngOnInit() {
    this.allCards = this.tarotService.getAllCards();
    this.filteredCards = this.allCards;
    this.historyList = this.tarotService.getHistory();
  }

  onFiltersChange(filters: { arcana: string; suit: string; reading: 'general' | 'career' | 'health' | 'relationships' }) {
    this.activeReading = filters.reading;

    this.filteredCards = this.allCards.filter(card => {
      const matchArcana = filters.arcana === 'all' || card.arcana === filters.arcana;
      const matchSuit = filters.suit === 'all' || card.suit === filters.suit;
      return matchArcana && matchSuit;
    });
  }

  // Explorar a biblioteca: abre direto com o significado completo
  openModal(card: Card) {
    this.selectedCard = card;
    this.challengeMode = false;
    this.showModal = true;
    this.showHistory = false;
    this.registerView(card);
  }

  // Modo desafio: sorteia uma carta e esconde o significado até o usuário revelar
  drawCard() {
    this.selectedCard = this.tarotService.getRandomCard();
    this.challengeMode = true;
    this.showModal = true;
    this.showHistory = false;
  }

  drawAnotherInChallenge() {
    this.selectedCard = this.tarotService.getRandomCard();
  }

  onReveal() {
    if (this.selectedCard) {
      this.registerView(this.selectedCard);
    }
  }

  closeModal() {
    this.showModal = false;
  }

  toggleHistory() {
    this.showHistory = !this.showHistory;
  }

  clearHistory() {
    this.tarotService.clearHistory();
    this.historyList = [];
  }

  private registerView(card: Card) {
    this.tarotService.addToHistory(card);
    this.historyList = this.tarotService.getHistory();
  }
}

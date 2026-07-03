import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Card } from '../models/card.model';

import major from '../../assets/data/major.json';
import cups from '../../assets/data/cups.json';
import swords from '../../assets/data/swords.json';
import wands from '../../assets/data/wands.json';
import pentacles from '../../assets/data/pentacles.json';

@Injectable({
  providedIn: 'root',
})
export class TarotService {
  private readonly HISTORY_KEY = 'tarot-insight-history';
  private readonly HISTORY_LIMIT = 12;
  private platformId = inject(PLATFORM_ID);

  private cards: Card[] = [
    ...(major as Card[]),
    ...(cups as Card[]),
    ...(swords as Card[]),
    ...(wands as Card[]),
    ...(pentacles as Card[])
  ];

  getAllCards(): Card[] {
    return this.cards;
  }

  getRandomCard(): Card {
    if (this.cards.length === 0) {
      throw new Error('Nenhuma carta carregada');
    }

    const i = Math.floor(Math.random() * this.cards.length);
    return this.cards[i];
  }

  getRandomFiltered(arcana: string, suit: string): Card {
    const filtered = this.cards.filter(card => {
      const matchArcana = arcana === 'all' || card.arcana === arcana;
      const matchSuit = suit === 'all' || card.suit === suit;
      return matchArcana && matchSuit;
    });

    const i = Math.floor(Math.random() * filtered.length);
    return filtered[i];
  }

  getHistory(): Card[] {
    if (!isPlatformBrowser(this.platformId)) return [];

    try {
      const raw = localStorage.getItem(this.HISTORY_KEY);
      if (!raw) return [];

      const ids: number[] = JSON.parse(raw);
      return ids
        .map(id => this.cards.find(c => c.id === id))
        .filter((c): c is Card => !!c);
    } catch {
      return [];
    }
  }

  addToHistory(card: Card): void {
    if (!isPlatformBrowser(this.platformId)) return;

    try {
      const raw = localStorage.getItem(this.HISTORY_KEY);
      let ids: number[] = raw ? JSON.parse(raw) : [];

      ids = ids.filter(id => id !== card.id);
      ids.unshift(card.id);
      ids = ids.slice(0, this.HISTORY_LIMIT);

      localStorage.setItem(this.HISTORY_KEY, JSON.stringify(ids));
    } catch {
      // localStorage indisponível (modo privado, SSR, etc.) - falha silenciosa
    }
  }

  clearHistory(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    localStorage.removeItem(this.HISTORY_KEY);
  }

}
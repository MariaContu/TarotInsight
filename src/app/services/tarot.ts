import { Injectable } from '@angular/core';
import { Card } from '../models/card.model';

import major from '../assets/data/major.json';
import cups from '../assets/data/cups.json';
import swords from '../assets/data/swords.json';
import wands from '../assets/data/wands.json';
import pentacles from '../assets/data/pentacles.json';

@Injectable({
  providedIn: 'root',
})
export class TarotService {

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

}
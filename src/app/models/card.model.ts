export type Suit = 'cups' | 'swords' | 'wands' | 'pentacles';
export type Arcana = 'major' | 'minor';

export interface Card {
  id: number;
  name: string;
  image: string;

  arcana: Arcana;
  suit?: Suit;

  meanings: {
    general: string;
    career: string;
    health: string;
    relationships: string;
  };

  reversedMeanings: {
    general: string;
    career: string;
    health: string;
    relationships: string;
  };
}
export type Suit = 'Copas' | 'Espadas' | 'Ouros' | 'Paus';
export type Arcana = 'Maior' | 'Menor';

export interface Card {
    id: number;
    name: string;
    image: string;

    suit?: Suit;
    arcana: Arcana;
    
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
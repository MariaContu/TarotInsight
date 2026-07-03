import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.card = {
      id: 0,
      name: 'O Louco',
      image: 'assets/cards/major/fool.jpg',
      arcana: 'major',
      meanings: { general: '', career: '', health: '', relationships: '' },
      reversedMeanings: { general: '', career: '', health: '', relationships: '' },
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

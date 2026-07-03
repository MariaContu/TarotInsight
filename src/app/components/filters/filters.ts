import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  standalone: true,
  templateUrl: './filters.html',
  styleUrl: './filters.scss'
})
export class FiltersComponent {

  selectedArcana: 'all' | 'major' | 'minor' = 'all';
  selectedSuit: 'all' | 'cups' | 'swords' | 'wands' | 'pentacles' = 'all';
  selectedReading: 'general' | 'career' | 'health' | 'relationships' = 'general';

  @Output() filtersChange = new EventEmitter<any>();

  setArcana(arcana: 'all' | 'major' | 'minor') {
    this.selectedArcana = arcana;

    if (arcana === 'major') {
      this.selectedSuit = 'all';
    }

    this.updateFilters();
  }

  setSuit(suit: 'all' | 'cups' | 'swords' | 'wands' | 'pentacles') {
    this.selectedSuit = suit;
    this.updateFilters();
  }

  setReading(reading: 'general' | 'career' | 'health' | 'relationships') {
    this.selectedReading = reading;
    this.updateFilters();
  }

  updateFilters() {
    this.filtersChange.emit({
      arcana: this.selectedArcana,
      suit: this.selectedSuit,
      reading: this.selectedReading
    });
  }

}

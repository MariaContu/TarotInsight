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

  updateFilters() {
    this.filtersChange.emit({
      arcana: this.selectedArcana,
      suit: this.selectedSuit,
      reading: this.selectedReading
    });
  }

}
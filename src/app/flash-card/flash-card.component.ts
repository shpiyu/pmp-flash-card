import { Component, OnInit } from '@angular/core';
import { LevelCompleteEvent } from '../word-card-container/word-card-container.component';
import { WordLevel } from '../word-levels/word-level';

@Component({
  selector: 'app-flash-card',
  templateUrl: './flash-card.component.html',
  styleUrls: ['./flash-card.component.css']
})
export class FlashCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  levelComplete: boolean = false;
  selectedLevel: WordLevel | null = null;

  onLevelComplete(event: LevelCompleteEvent): void {
    this.levelComplete = true;
  }

  onLevelSelect(level: WordLevel): void {
    this.selectedLevel = level;
  }

  resetLevel(): void {
    this.selectedLevel = null;
    this.levelComplete = false;
  }

}
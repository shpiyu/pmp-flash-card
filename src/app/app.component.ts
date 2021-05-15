import { Component, VERSION } from '@angular/core';
import { LevelCompleteEvent } from './word-card-container/word-card-container.component';
import { WordLevel } from './word-levels/word-level';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

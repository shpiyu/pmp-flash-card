import { Component, VERSION } from '@angular/core';
import { LevelCompleteEvent } from './word-card-container/word-card-container.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  levelComplete: boolean = false;

  onLevelComplete(event: LevelCompleteEvent): void {
    console.log('all words are learnt. Go to next level');
    this.levelComplete = true;
  }
}

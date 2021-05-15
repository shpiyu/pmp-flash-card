import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Word } from '../word-card/word';
import { WordsService } from '../words.service';
import { WordLevel } from './word-level';

@Component({
  selector: 'app-word-levels',
  templateUrl: './word-levels.component.html',
  styleUrls: ['./word-levels.component.css']
})
export class WordLevelsComponent implements OnInit {
  @Output() selectLevel = new EventEmitter<WordLevel>();

  levels: WordLevel[] = [];

  constructor(private wordsService: WordsService) {}

  ngOnInit() {
    this.wordsService
      .getWordLevels()
      .subscribe(levels => (this.levels = levels));
  }

  onCardClick(selectedLevel: WordLevel): void {
    this.selectLevel.emit(selectedLevel);
  }
}

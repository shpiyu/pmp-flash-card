import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Word } from '../word-card/word';
import { WordLevel } from './word-level';

@Component({
  selector: 'app-word-levels',
  templateUrl: './word-levels.component.html',
  styleUrls: ['./word-levels.component.css']
})
export class WordLevelsComponent implements OnInit {
  @Output() selectLevel = new EventEmitter<WordLevel>();

  levels: WordLevel[] = [
    {
      title: 'easy',
      description: 'Easy words, perfect for beginners'
    },
    {
      title: 'medium',
      description: 'For the serious aspirants'
    },
    {
      title: 'hard',
      description: 'Show your mastery now'
    }
  ];

  constructor() {}

  ngOnInit() {}

  onCardClick(selectedLevel: WordLevel): void {
    this.selectLevel.emit(selectedLevel);
  }
}

import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { Word } from '../word-card/word';
import { WordResult } from '../word-card/word-card.component';
import { WordLevel } from '../word-levels/word-level';
import { WordsService } from '../words.service';

@Component({
  selector: 'app-word-card-container',
  templateUrl: './word-card-container.component.html',
  styleUrls: ['./word-card-container.component.css']
})
export class WordCardContainerComponent implements OnInit, OnChanges {
  words: Word[] = [];
  currentWord: Word;

  @Input() selectedLevel: WordLevel;
  @Output() levelComplete = new EventEmitter<LevelCompleteEvent>();

  constructor(private wordsService: WordsService) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if ('selectedLevel' in changes) {
      this.wordsService
        .getWordsByLevel(this.selectedLevel.title)
        .subscribe(words => {
          this.words = words;
          this.currentWord = this.words.shift();
        });
    }
  }

  onAnswerSelected(selectedAnswer: WordResult): void {
    if (selectedAnswer.knew) {
      // do something if user knew the word
    } else {
      this.words.push(selectedAnswer.word);
    }

    if (this.words.length != 0) {
      this.currentWord = this.words.shift();
    } else {
      this.levelComplete.emit({ data: true });
    }
  }
}

export interface LevelCompleteEvent {
  data: boolean;
}

import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChange,
  SimpleChanges
} from '@angular/core';
import { Word } from './word';

@Component({
  selector: 'app-word-card',
  templateUrl: './word-card.component.html',
  styleUrls: ['./word-card.component.css']
})
export class WordCardComponent implements OnInit, OnChanges {
  @Input() word: Word;
  @Output() answer = new EventEmitter<WordResult>();

  showMeaning = false;
  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if ('word' in changes) {
      this.showMeaning = false;
    }
  }

  onCardClick(): void {
    if (!this.showMeaning) {
      this.showMeaning = true;
    }
  }

  onWordAction(selectedAnswer: boolean): void {
    this.answer.emit({ word: this.word, knew: selectedAnswer });
  }
}

export interface WordResult {
  word: Word;
  knew: boolean;
}

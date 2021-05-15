import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { filter } from 'rxjs/operators';
import { UserService } from '../user.service';
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
  learntWords: Word[] = [];
  learntWordIds: number[] = [];
  currentWord: Word;

  @Input() selectedLevel: WordLevel;
  @Output() levelComplete = new EventEmitter<LevelCompleteEvent>();

  constructor(
    private wordsService: WordsService,
    private userService: UserService
  ) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if ('selectedLevel' in changes) {
      this.wordsService
        .getWordsByLevel(this.selectedLevel.title)
        .subscribe(words => {
          this.words = words;
          this.filterWords();
        });
    }
  }

  filterWords() {
    this.userService
      .getLearntWordIds(this.selectedLevel.title)
      .subscribe(ids => {
        this.words = this.words.filter((word: Word) => ids.includes(word.id));
        this.currentWord = this.words.shift();
      });
  }

  onAnswerSelected(selectedAnswer: WordResult): void {
    if (selectedAnswer.knew) {
      this.userService.learntNewWord(selectedAnswer.word, this.selectedLevel.title);
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

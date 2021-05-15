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

  ngOnInit() {
    this.userService
      .getLearntWordIds(this.selectedLevel.title)
      .subscribe(
        ids => (this.learntWordIds = ids),
        error => console.error('Error fetching learntWordIds', error)
      );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('selectedLevel' in changes) {
      this.wordsService
        .getWordsByLevel(this.selectedLevel.title)
        .subscribe(words => {
          this.words = words.filter(
            (word: Word) => !(word.id in this.learntWordIds)
          );
          this.currentWord = this.words.shift();
        });
    }
  }

  onAnswerSelected(selectedAnswer: WordResult): void {
    if (selectedAnswer.knew) {
      this.learntWords.push(selectedAnswer.word);
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

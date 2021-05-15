import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Progress } from './progress/progress';
import { Word } from './word-card/word';

@Injectable()
export class UserService {
  private currentUserId: string;

  constructor() {
    // todo: get from logged in user
    this.currentUserId = 'test-user';
  }

  getCurrentUserId(): string {
    return this.currentUserId;
  }

  learntNewWord(word: Word, level: String): void {
    // for logged in user append learnt words in user+level
    console.log('Saved word id in level', word, level);
  }

  getLearntWordIds(level: string): Observable<number[]> {
    // todo: get from db
    switch (level) {
      case 'easy':
        return from([[1, 2]]);
      case 'medium':
        return from([[4]]);
      case 'hard':
        return from([[]]);
    }
  }
}

import { Word } from '../word-card/word';

/**
 * Progress class for each user
 * Stores the level name and words learnt in that level.
 */
export class Progress {
  level: string;
  learntWords: Set<Word>;

  learntNewWord(word: Word): void {
    this.learntWords.add(word);
  }
}

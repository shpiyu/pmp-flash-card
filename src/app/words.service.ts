import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Word } from './word-card/word';
import { WordLevel } from './word-levels/word-level';

@Injectable()
export class WordsService {
  private sampleLevels: WordLevel[] = [
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

  private sampleWords: Word[] = [
    {
      id: 1,
      title: 'Project Management',
      description: 'Project Management is a study of managing projects'
    },
    {
      id: 2,
      title: 'Agile',
      description:
        'Agile is a super cool way working on a project and in a team'
    },
    {
      id: 3,
      title: 'Deadline',
      description: "If you cross this line you're dead"
    }
  ];

  private mediumWords: Word[] = [
    {
      id: 4,
      title: 'Piyush',
      description: 'meaning of Piyush'
    },
    {
      id: 5,
      title: 'Ranjan',
      description: 'meaning of ranjan'
    }
  ];

  private hardWords: Word[] = [
    {
      id: 6,
      title: 'Raja',
      description: 'meaning of raja'
    },
    {
      id: 7,
      title: 'Baja',
      description: 'meaning of baja'
    }
  ];

  constructor() {}

  getWordLevels(): Observable<WordLevel[]> {
    return from([this.sampleLevels]);
  }

  getWordsByLevel(level: string): Observable<Word[]> {
    switch (level) {
      case 'easy':
        return from([this.sampleWords]);
      case 'medium':
        return from([this.mediumWords]);
      case 'hard':
        return from([this.hardWords]);
      default:
        throw new Error('Invalid level selected = ' + level);
    }
  }
}

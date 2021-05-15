import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Word } from '../word-card/word';
import { WordResult } from '../word-card/word-card.component';

@Component({
  selector: 'app-word-card-container',
  templateUrl: './word-card-container.component.html',
  styleUrls: ['./word-card-container.component.css']
})
export class WordCardContainerComponent implements OnInit {
  words: Word[] = [
    {
      title: 'Project Management',
      description: 'Project Management is a study of managing projects'
    },
    {
      title: 'Agile',
      description:
        'Agile is a super cool way working on a project and in a team'
    },
    {
      title: 'Deadline',
      description: "If you cross this line you're dead"
    }
  ];
  currentWord: Word = this.words.shift();

  @Output() levelComplete = new EventEmitter<LevelCompleteEvent>();

  constructor() {}

  ngOnInit() {}

  onAnswerSelected(selectedAnswer: WordResult): void {
    console.log(this.words);
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

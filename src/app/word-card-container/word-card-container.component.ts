import { Component, OnInit } from '@angular/core';
import { Word } from '../word-card/word';

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

  constructor() {}

  ngOnInit() {}

  onAnswerSelected(selectedAnswer: boolean): void {
    console.log(this.words);
    if (selectedAnswer) {
      // do something if user knew the word
    } else {
      // do something if user didn't know the word
    }

    if (this.words.length != 0) {
      this.currentWord = this.words.shift();
    } else {
      console.log('all words are learnt. Go to next level');
    }
  }
}

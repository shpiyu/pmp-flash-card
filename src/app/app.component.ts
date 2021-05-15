import { Component, VERSION } from '@angular/core';
import { Word } from './word-card/word';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  word: Word = {
    title: 'Project Management',
    description: 'Project Management is a study of managing projects'
  };
}

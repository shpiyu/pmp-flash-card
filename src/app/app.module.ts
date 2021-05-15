import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { WordCardComponent } from './word-card/word-card.component';
import { WordCardContainerComponent } from './word-card-container/word-card-container.component';
import { WordLevelsComponent } from './word-levels/word-levels.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [AppComponent, HelloComponent, WordCardComponent, WordCardContainerComponent, WordLevelsComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { WordCardComponent } from './word-card/word-card.component';
import { WordCardContainerComponent } from './word-card-container/word-card-container.component';
import { WordLevelsComponent } from './word-levels/word-levels.component';
import { WordsService } from './words.service';
import { UserService } from './user.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    WordCardComponent,
    WordCardContainerComponent,
    WordLevelsComponent,
    LoginComponent
  ],
  bootstrap: [AppComponent],
  providers: [WordsService, UserService]
})
export class AppModule {}

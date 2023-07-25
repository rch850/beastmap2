import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { AboutComponent } from './about/about.component';
import { AnswerButtonComponent } from './answer-button/answer-button.component';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        GameComponent,
        AboutComponent,
        AnswerButtonComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

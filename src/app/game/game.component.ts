import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AnswerButtonComponent } from '../answer-button/answer-button.component';
import { Candidate, initGameState, INITIAL_GAME_STATE, nextGame } from './game';

@Component({
  standalone: true,
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.sass'],
  imports: [
    NgForOf,
    RouterModule,
    AnswerButtonComponent
  ]
})
export default class GameComponent implements OnInit {

  gameState = INITIAL_GAME_STATE
  images: string[] = []

  constructor() { }

  ngOnInit(): void {
    this.gameState = initGameState()
  }

  onClickCandidate(a: Candidate): void {
    if (a.name === this.gameState.correctAnswer) {
      a.state = 'correct'
      setTimeout(() => {
        this.gameState = nextGame(this.gameState)
      }, 3000)
    } else {
      a.state = 'wrong'
    }
  }

}

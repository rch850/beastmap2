import { CommonModule } from '@angular/common';
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
    CommonModule,
    RouterModule,
    AnswerButtonComponent
  ]
})
export class GameComponent implements OnInit {

  gameState = INITIAL_GAME_STATE
  images: string[] = []

  constructor() { }

  ngOnInit(): void {
    this.gameState = initGameState()
  }

  onClickCandidate(a: Candidate): void {
    if (a.name === this.gameState.correctAnswer) {
      alert('正解！')
      this.gameState = nextGame(this.gameState)
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Candidate, initGameState, INITIAL_GAME_STATE, nextGame } from './game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.sass']
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

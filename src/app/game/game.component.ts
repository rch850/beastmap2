import { Component, OnInit } from '@angular/core';
import { initGameState, INITIAL_GAME_STATE } from './game';

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

}

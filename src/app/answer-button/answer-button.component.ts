import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

export type AnswerState = 'empty' | 'correct' | 'wrong'

@Component({
  standalone: true,
  selector: 'app-answer-button',
  imports: [
    NgIf
  ],
  templateUrl: './answer-button.component.html',
})
export class AnswerButtonComponent {
  @Input() name = ''
  @Input() imageUrl = ''
  @Input() state: AnswerState = 'empty'
}

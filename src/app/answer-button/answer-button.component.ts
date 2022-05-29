import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-answer-button',
  templateUrl: './answer-button.component.html',
})
export class AnswerButtonComponent {
  @Input() name = ''
  @Input() imageUrl = ''
}

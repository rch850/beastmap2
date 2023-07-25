import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-answer-button',
    templateUrl: './answer-button.component.html',
    standalone: true,
})
export class AnswerButtonComponent {
  @Input() name = ''
  @Input() imageUrl = ''
}

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent{
  @Input() name?: string;
  @Input() genre?: string;
  @Output() toggle = new EventEmitter<string>()

}

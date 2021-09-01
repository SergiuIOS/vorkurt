import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'elix-header',
  templateUrl: './header.component.html',
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: '#c6ecff'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  @Input()
  inputValue: String
  constructor() { }

  ngOnInit(): void {
  }

  @Input() name: string
  @Input() color = 'transparent'
  @Output()
  onSayHello = new EventEmitter<Event>()

  @Input() background : 'light' | 'dark' | 'transparent' = 'transparent'

  resizeData(event: Event){
    this.inputValue = ' '
  }

}

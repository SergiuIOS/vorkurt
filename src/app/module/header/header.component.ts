import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {ConnectionService} from "../../shared/utils/services/firebase/connection.service";
import {map} from "rxjs/operators";

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
  inputValue = ''
  value: any
  value1: any

  constructor(private _firebaseTry: ConnectionService) {
    this._firebaseTry.setUrl('/repository')
  }

  ngOnInit(): void {
    this._firebaseTry.data.snapshotChanges()
      .pipe(map(changeData => changeData
        .map(c => {
          let a = c.payload.doc.data();
          return {
            key: c.payload.doc.id, value:
              a[Object.keys(a)[0]]
          }
        }))).subscribe(data => console.log(data))
    console.log("value ", this.value, "value 1", this.value1)
  }

  @Input() name: string
  @Input() color = 'transparent'
  @Output()
  onSayHello = new EventEmitter<Event>()

  @Input() background: 'light' | 'dark' | 'transparent' = 'transparent'

  resizeData(event: Event) {
    this.inputValue = ' '
  }

}

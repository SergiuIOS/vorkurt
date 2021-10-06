import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {ConnectionService} from "../../shared/utils/services/firebase/connection.service";
import {catchError, map} from "rxjs/operators";
import {PopUpStateService} from "./pop-up-login/pop-up-state.service";
import {throwError} from "rxjs";
import {AuthService} from "../../shared/utils/services";
import {OverlayPopUpService} from "../../shared/utils/services/overlay/overlay-pop-up.service";

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
  @Input() name: string
  @Input() color = 'transparent'
  @Output()
  onSayHello = new EventEmitter<MouseEvent>()
  @Input() background: 'light' | 'dark' | 'transparent' = 'transparent'
  @ViewChild('pointIcon') pointIcon: ElementRef

  constructor(private _firebaseTry: ConnectionService, private _popUpState: PopUpStateService,
              private _overlayPopUpService: OverlayPopUpService
              ) {
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
  }

  resizeData(event: Event, dinamically: boolean) {

    dinamically ? this.inputValue = ' ' : this.inputValue = ''
  }

  retriveCoordinates(event: MouseEvent) {
    this.onSayHello.emit(event)
    this._popUpState.statePopLogin(true)

    this._overlayPopUpService.open(event)
  }
}

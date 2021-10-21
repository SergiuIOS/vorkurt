import {Component, OnInit, ViewChild} from '@angular/core';
import {OverlayService} from "../../../shared/utils/services/overlay/overlay.service";
import {UserNameRepositoryComponent} from "../tooltip/user-name-repository/user-name-repository.component";

@Component({
  selector: 'elix-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.scss']
})
export class MiddleComponent implements OnInit {
  @ViewChild('userName') middle: any

  constructor(private _overlayAll: OverlayService) {
  }

  ngOnInit(): void {
  }

  openServices(event: any) {
    const target = this.middle as HTMLElement
    this._overlayAll.display(target, UserNameRepositoryComponent)

  }
}

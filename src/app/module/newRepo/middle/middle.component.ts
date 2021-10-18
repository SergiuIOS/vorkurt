import {Component, OnInit, ViewChild} from '@angular/core';
import {OverlayService} from "../../../shared/utils/services/overlay/overlay.service";
import {AuthComponent} from "../../../auth/auth.component";

@Component({
  selector: 'elix-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.scss']
})
export class MiddleComponent implements OnInit {
  @ViewChild('middle') middle: any

  constructor(private _overlayAll: OverlayService) {
  }

  ngOnInit(): void {
  }

  openServices(event: any) {
    const target = document.getElementById('div') as HTMLElement
    this._overlayAll.display(this.middle, AuthComponent)

  }
}

import {Component, OnInit, ViewChild} from '@angular/core';
import {OverlayService} from "../../../shared/utils/services/overlay/overlay.service";

@Component({
  selector: 'elix-header-new-repo',
  templateUrl: './header-new-repo.component.html',
  styleUrls: ['./header-new-repo.component.scss']
})
export class HeaderNewRepoComponent implements OnInit {

  @ViewChild('button') button: any

  constructor(private _overlayAll: OverlayService) {
  }

  ngOnInit(): void {
  }

  openService(event: any) {
    const target = document.querySelector('button') as HTMLElement
    // this._overlayAll.display(target, TestComponent)

  }


}

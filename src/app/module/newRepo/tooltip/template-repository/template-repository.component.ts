import {Component, OnDestroy, OnInit} from '@angular/core';
import {NewRepositoryService} from "../../../../shared/utils/services/newRepository/new-repository.service";
import {OverlayService} from "../../../../shared/utils/services/overlay/overlay.service";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'elix-template-repository',
  templateUrl: './template-repository.component.html',
  styleUrls: ['./template-repository.component.scss']
})
export class TemplateRepositoryComponent implements OnInit, OnDestroy {
  dataTemplate: any
  private unSubscribe = new Subject()

  constructor(private _newRepository: NewRepositoryService, private _overlayService: OverlayService) { }

  ngOnInit(): void {
    this._newRepository.newRepo$.pipe(takeUntil(this.unSubscribe)).subscribe(resp => {
      this.dataTemplate = resp
    })
  }

  onClick(event: Event){
    this._overlayService.closeOverlay()
  }

  ngOnDestroy(): void {
    this.unSubscribe.next()
    this.unSubscribe.complete()
  }


}

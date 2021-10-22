import {Component, OnInit, ViewChild} from '@angular/core';
import {OverlayService} from "../../../shared/utils/services/overlay/overlay.service";
import {UserNameRepositoryComponent} from "../tooltip/user-name-repository/user-name-repository.component";
import {TemplateRepositoryService} from "../../../shared/utils/services/newRepository/template-repository/template-repository.service";

@Component({
  selector: 'elix-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.scss']
})
export class MiddleComponent implements OnInit {
  @ViewChild('userName') middle: any

  user: any
  repositoryName: string
  description: string

  constructor(private _overlayAll: OverlayService, private _templateRepository: TemplateRepositoryService) {
  }

  ngOnInit(): void {
    this._templateRepository.templateUserName$.subscribe(resp => this.user = resp)
  }

  openServices(event: any) {
    const target = this.middle as HTMLElement
    this._overlayAll.display(target, UserNameRepositoryComponent)
  }

  setDescription(event: Event) {
    const a = event.target as HTMLTextAreaElement
    this._templateRepository.sendDescriptionNameOnObservable(a.value ?? "")
  }

  setRepositoryName(event: Event) {
    const a = event.target as HTMLTextAreaElement
    this._templateRepository.sendRepositoryNameOnObservable(a.value)
  }
}

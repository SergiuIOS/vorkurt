import { Injectable } from '@angular/core';
import {Overlay} from "@angular/cdk/overlay";
import {ComponentPortal} from "@angular/cdk/portal";

@Injectable({
  providedIn: 'root'
})
export class OverlayService {

  constructor(private _ovelay: Overlay) { }

  display(element: any, exampleOverlayComponent: any){
    const target = element
    const overlayRef = this._ovelay.create({
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop',
      panelClass: 'vorkurt-overlay',
      positionStrategy: this._ovelay.position()
        .flexibleConnectedTo(target)
        .withPositions([
          {
            originX: 'start',
            originY: 'bottom',
            overlayX: 'start',
            overlayY: 'top',
          },
          {
            originX: 'center',
            originY: 'top',
            overlayX: 'end',
            overlayY: 'bottom',
          },
          {
            originX: 'end',
            originY: 'top',
            overlayX: 'start',
            overlayY: 'top',
          },
          {
            originX: 'start',
            originY: 'top',
            overlayX: 'end',
            overlayY: 'top',
          },
        ]),
    })
    const component = new ComponentPortal(exampleOverlayComponent);
    const componentRef = overlayRef.attach(component);
    overlayRef.backdropClick().subscribe(() => {
      overlayRef.detach()
      overlayRef.dispose()
    });
  }

}

import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { OverlayService }                             from '../../overlay/overlay.service';
import { ItemsTooltipComponent }                      from '../../../../../module/transport/item/tooltip/items-tooltip/items-tooltip.component';
import { TooltipItemsService }                        from '../../index';

@Directive( {
  selector: '[elixTooltipDirective]',
} )
export class TooltipDirectiveDirective {
  @Input() name : string;
  
  constructor (
      private _elementRef : ElementRef,
      private _overlayAll : OverlayService,
      private _tooltipService : TooltipItemsService
  ) {
  }
  
  @HostListener( 'click' ) mouseOver () {
    const target = this._elementRef.nativeElement as HTMLElement;
    this._tooltipService.dataNextTooltip( this._elementRef.nativeElement.value );
    this._overlayAll.display( target, ItemsTooltipComponent );
  }
}

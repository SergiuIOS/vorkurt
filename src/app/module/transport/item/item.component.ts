import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component( {
  selector: 'elix-item',
  templateUrl: './item.component.html',
  styleUrls: [ './item.component.sass' ],
} )
export class ItemComponent implements OnInit {
  url : any;
  buttons: []
  
  constructor (private _route : Router, private _activateRouter: ActivatedRoute) {
    this.url = _route.url.split( '/' ).slice( 1);
  }
  
  ngOnInit () : void {
  }
  
  goToPage(action: string){
    if(action === 'new'){
      this._route.navigate(['new'], {relativeTo: this._activateRouter})
      console.log(this.buttons)
    }
  }
}

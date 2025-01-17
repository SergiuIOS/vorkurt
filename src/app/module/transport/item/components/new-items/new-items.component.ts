import { Component, OnInit }      from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { create_UUID }            from '../../../../../config/global/generator';

@Component( {
	selector: 'elix-new-items',
	templateUrl: './new-items.component.html',
	styleUrls: [ './new-items.component.sass' ],
} )
export class NewItemsComponent implements OnInit {
	items = new FormGroup( {
		pckItemId: new FormControl( create_UUID() ),
		itemId: new FormControl( create_UUID() ),
		hazmatPckTypeId: new FormControl( '' ),
		pckWeight: new FormControl( '' ),
		pckWidth: new FormControl( '' ),
		unitLength: new FormControl( '' ),
		diameterPerShipUnit: new FormControl( '' ),
		pckItemTypeId: new FormControl( '' ),
		innerPackPckUnit: new FormControl( '' ),
		bulkMixingFamilyId: new FormControl( '' ),
		description: new FormControl( '' ),
		priority: new FormControl( '' ),
		pckUnit: new FormControl( '' ),
		unitVolume: new FormControl( '' ),
		unitWidth: new FormControl( '' ),
		coreDiameter: new FormControl( '' ),
		thuProfileId: new FormControl( '' ),
		innerPackSize: new FormControl( '' ),
		compartmentTypeProfileId: new FormControl( '' ),
		hazaradous: new FormControl( false ),
		mixable: new FormControl( false ),
		defaultPck: new FormControl( false ),
		unitHeight: new FormControl( '' ),
		loadConfigRuleRank: new FormControl( '' ),
		innerPckSizeUOMcode: new FormControl( '' ),
		categoryId: new FormControl( create_UUID() ),
	} );
	
	constructor () {
	}
	
	ngOnInit () : void {
	}
	
	getValue () {
		console.log( this.items.value );
	}
}

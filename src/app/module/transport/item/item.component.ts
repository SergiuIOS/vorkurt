import { Component, OnInit }      from '@angular/core';
import { create_UUID }            from '../../../config/global/generator';
import { FormControl, FormGroup } from '@angular/forms';
import { OverlayService }         from '../../../shared/utils/services/overlay/overlay.service';

@Component({
  selector: 'elix-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.sass']
})
export class ItemComponent implements OnInit {

  constructor() { }

  items = new FormGroup({
    pckItemId: new FormControl(create_UUID()),
    itemId:new FormControl( create_UUID()),
    hazmatPckTypeId:new  FormControl(''),
    pckWeight: new FormControl(''),
    pckWidth: new FormControl(''),
    unitLength: new FormControl(''),
    diameterPerShipUnit: new FormControl(''),
    pckItemTypeId: new FormControl(''),
    innerPackPckUnit: new FormControl(''),
    bulkMixingFamilyId: new FormControl(''),
    description: new FormControl(''),
    priority: new FormControl(''),
    pckUnit: new FormControl(''),
    unitVolume: new FormControl(''),
    unitWidth: new FormControl(''),
    coreDiameter: new FormControl(''),
    thuProfileId: new FormControl(''),
    innerPackSize: new FormControl(''),
    compartmentTypeProfileId: new FormControl(''),
    hazaradous: new FormControl(false),
    mixable: new FormControl(false),
    defaultPck: new FormControl(false),
    unitHeight: new FormControl(''),
    loadConfigRuleRank: new FormControl(''),
    innerPckSizeUOMcode: new FormControl(''),
    categoryId: new FormControl(create_UUID())
  })
  
  ngOnInit(): void {
    console.log(create_UUID())
  }

  getValue(){
    console.log(this.items.value)
  }
  
}

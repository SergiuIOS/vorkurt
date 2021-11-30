import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { ItemComponent }       from './item.component';
import { AppItemRouting }      from './item.routing';
import { MatIconModule }       from '@angular/material/icon';
import { MatButtonModule }     from '@angular/material/button';
import { MatCheckboxModule }   from '@angular/material/checkbox';
import { SharedModule }        from '../../../shared/shared.module';
import { MatInputModule }      from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { ItemsTooltipComponent } from './tooltip/items-tooltip/items-tooltip.component';

@NgModule({
  declarations: [ItemComponent, ItemsTooltipComponent],
  imports: [
    CommonModule,
    AppItemRouting,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    SharedModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
})
export class ItemModule {}

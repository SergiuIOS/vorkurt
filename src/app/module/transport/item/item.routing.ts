import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent }        from './item.component';
import { NewItemsComponent }    from './components/new-items/new-items.component';
import { ListItemsComponent }   from './components/list-items/list-items.component';

const routes : Routes = [
  {
    path: '',
    component: ItemComponent,
    children: [
      {
        path: '',
        component: ListItemsComponent,
      },
      {
        path: 'new',
        component: NewItemsComponent,
      },
    ],
  },
];

@NgModule( {
  imports: [ RouterModule.forChild( routes ) ],
  exports: [ RouterModule ],
} )
export class AppItemRouting {
}

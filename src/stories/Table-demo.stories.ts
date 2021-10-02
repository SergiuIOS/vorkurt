import {moduleMetadata} from '@storybook/angular';
import {APP_BASE_HREF, CommonModule} from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/angular/types-6-0';
import {CoreModule} from "../@core/core/core.module";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";
import {RouterModule} from "@angular/router";
import {AngularFireModule} from "@angular/fire/compat";
import {firebaseConfig} from "../app/config/auth/firebase";
import {TableRepositoryComponent} from "../app/module/repository-container/table-repository/table-repository.component";
import {AgGridModule} from "ag-grid-angular";
import {SharedModule} from "../app/shared/shared.module";

export default {
  title: 'Table Demo',
  component: TableRepositoryComponent,
  argTypes: {
    paginationSize: {
      options: ['20', '50', '100'],
      control: {type: 'radio'}
    },
    rowData: {
      control: {type: 'radio'},
      option:
        [
          {
            "athlete": "Kateryna Serdiuk",
            "age": 17,
            "country": "Ukraine",
            "year": 2000,
            "date": "01/10/2000",
            "sport": "Archery",
            "gold": 0,
            "silver": 1,
            "bronze": 0,
            "total": 1
          },
          {
            "athlete":
              "Wietse van Alten",
            "age":
              21,
            "country":
              "Netherlands",
            "year":
              2000,
            "date":
              "01/10/2000",
            "sport":
              "Archery",
            "gold":
              0,
            "silver":
              0,
            "bronze":
              1,
            "total":
              1
          }
          ,
          {
            "athlete":
              "Sandra Wagner-Sachse",
            "age":
              31,
            "country":
              "Germany",
            "year":
              2000,
            "date":
              "01/10/2000",
            "sport":
              "Archery",
            "gold":
              0,
            "silver":
              0,
            "bronze":
              1,
            "total":
              1
          }
          ,
          {
            "athlete":
              "Rod White",
            "age":
              23,
            "country":
              "United States",
            "year":
              2000,
            "date":
              "01/10/2000",
            "sport":
              "Archery",
            "gold":
              0,
            "silver":
              0,
            "bronze":
              1,
            "total":
              1
          }
        ]
    }
  },
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule, CoreModule, MatIconModule,
        FormsModule, RouterTestingModule, SharedModule,
        AgGridModule.withComponents([]),
        RouterModule.forRoot([{
          path: 'repozitory',
          loadChildren: () => import('./../app/module/repository-container/repository-container.module').then(m => m.RepositoryContainerModule)
        },
        ]),
        AngularFireModule.initializeApp(firebaseConfig),

      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
      ]
    }),
  ],
} as Meta;

export const TableLMT: Story<TableRepositoryComponent> = (args: TableRepositoryComponent) => (
  {
    ...args,
    rowData: args.rowData,
    template: `<elix-table-repository></elix-table-repository>
                <router-outlet></router-outlet>
`
  });




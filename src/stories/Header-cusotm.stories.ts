import {moduleMetadata} from '@storybook/angular';
import {APP_BASE_HREF, CommonModule} from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/angular/types-6-0';
import {HeaderComponent} from "../app/module/header/header.component";
import {CoreModule} from "../@core/core/core.module";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";
import {RouterModule} from "@angular/router";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import firebase from "firebase/compat";
import Firestore = firebase.firestore.Firestore;
import {AngularFireModule} from "@angular/fire/compat";
import {firebaseConfig} from "../app/config/auth/firebase";

export default {
  title: 'Header',
  component: HeaderComponent,
  argTypes: {
    background: {
      options: ['light', 'dark', 'transparent'],
      control: {type: 'radio'}
    },
    name: {
      options: ['Mihai', 'Denis', 'Sami'],
      control: {type: 'radio'}
    },
    color: {
      options: ['light', 'dark', 'transparent'],
      control: {type: 'radio'}
    },
  },
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule, CoreModule, MatIconModule,
        FormsModule, RouterTestingModule,
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

export const Template: Story<HeaderComponent> = (args: HeaderComponent) => (
  {
    props: args,
    template: `<elix-header></elix-header>
    <router-outlet></router-outlet>
`
  });




import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {RepositoryContainerModule} from "./module/repository-container/repository-container.module";
import {CoreModule} from "../@core/core/core.module";
import {AgGridModule} from "ag-grid-angular";
import {SharedModule} from "./shared/shared.module";
import {firebaseConfig} from "./config/auth/firebase";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import { AuthComponent } from './auth/auth.component';
import {MatRippleModule} from "@angular/material/core";

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatIconModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireDatabaseModule,
        FormsModule,
        RepositoryContainerModule,
        CoreModule,
        AgGridModule.withComponents([]),
        SharedModule,
        MatRippleModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

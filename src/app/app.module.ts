import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule,  routerReducer} from "@ngrx/router-store";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

const NGRX_IMPORTS = [
  StoreModule.forRoot( reducers, { metaReducers }),
  StoreRouterConnectingModule.forRoot({ stateKey: 'router'}),
  EffectsModule.forRoot( [] ),
  StoreDevtoolsModule.instrument( {
    name: 'AngularChatNgRx',
    logOnly: environment.production
  })
]

import { reducers, metaReducers } from "./reducers/reducers";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...NGRX_IMPORTS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

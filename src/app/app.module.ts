import { BrowserModule, BrowserTransferStateModule, TransferState, makeStateKey} from '@angular/platform-browser';
import { NgModule, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatButtonModule, MatFormFieldModule, MatFormFieldControl } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';


import { routesModule } from './app.routes';

import * as fromRoot from './reducers';
import { reducers, metaReducers } from './reducers';

import { StoreModule, Store } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { WordEffects } from './effects/words';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { DefinitionComponent } from './definition/definition.component';
import { VocabListComponent } from './vocab-list/vocab-list.component';
import { VocabDetailComponent } from './vocab-detail/vocab-detail.component';
import { DefinitionService } from './definition.service';
import { WordsService } from './words.service';

export const NGRX_STATE = makeStateKey('NGRX_STATE');

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DefinitionComponent,
    VocabListComponent,
    VocabDetailComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    HttpClientModule,
    routesModule,
    BrowserTransferStateModule,
    StoreModule.forRoot(fromRoot.reducers, { metaReducers }),
    EffectsModule.forRoot([WordEffects])
  ],
  providers: [DefinitionService, WordsService],
  bootstrap: [AppComponent]
})

export class AppModule {
    public constructor(
      private readonly transferState: TransferState,
      private readonly store: Store<fromRoot.State>,
  ) {
      const isBrowser = this.transferState.hasKey<any>(NGRX_STATE);

      if (isBrowser) {
          this.onBrowser();
      } else {
          this.onServer();
      }
  }
  onServer() {

      this.transferState.onSerialize(NGRX_STATE, () => {
          let state;
          this.store.subscribe( ( saveState: any ) => {
              console.log('Set for browser', JSON.stringify(saveState));
              state = saveState;
          }).unsubscribe();

          return state;
      });
  }

  onBrowser() {
      const state = this.transferState.get<any>(NGRX_STATE, null);
      this.transferState.remove(NGRX_STATE);
      this.store.dispatch( { type: 'SET_ROOT_STATE', payload: state } );
      console.log('Got state from server', JSON.stringify(state));
  }
 }

import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatButtonModule, MatFormFieldModule, MatFormFieldControl } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { environment } from '../environments/environment';

// packages
import { StoreModule, ActionsSubject } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { routesModule } from './app.routes';

// application/components
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { DefinitionComponent } from './definition/definition.component';
import { VocabListComponent } from './vocab-list/vocab-list.component';
import { VocabDetailComponent } from './vocab-detail/vocab-detail.component';

// application/services
import { DefinitionService } from './definition.service';
import { WordsService } from './words.service';

import { reducers, metaReducers } from './reducers';

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
    StoreModule.forRoot(reducers, { metaReducers }),
  ],
  providers: [DefinitionService, WordsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

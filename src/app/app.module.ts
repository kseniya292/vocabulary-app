import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatButtonModule, MatFormFieldModule, MatFormFieldControl } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

import { routesModule } from './app.routes';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { DefinitionComponent } from './definition/definition.component';
import { VocabListComponent } from './vocab-list/vocab-list.component';
import { VocabDetailComponent } from './vocab-detail/vocab-detail.component';
import { DefinitionService } from './definition.service';
import { WordsService } from './words.service';


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
  ],
  providers: [DefinitionService, WordsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

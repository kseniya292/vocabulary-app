import { Component, OnInit, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { MatInputModule, MatButtonModule, MatFormFieldModule, MatFormFieldControl } from '@angular/material';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers';
import * as searchActions from '../actions/search';

import { DefinitionService } from '../definition.service';
import { WordsService } from '../words.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm: Observable<string>;
  errorMsg: string;

  constructor(
    private definitionService: DefinitionService,
    private wordsService: WordsService,
    private router: Router,
    private store: Store<fromRoot.State>
  ) { }

  // calls the getDefinition service
  getDefinition(searchTerm: string) {
    this.store.dispatch(new searchActions.Search(searchTerm));

    this.definitionService.getDefinition(searchTerm)
    .subscribe(result => {
      // sends word and definition to shared service
      this.store.dispatch(new searchActions.SearchSuccess(result));

      // navigate to definition component
      this.router.navigate(['/definition']);
    },
    error => this.errorMsg = 'server is down'
  );

  }

  ngOnInit() {
  }

}

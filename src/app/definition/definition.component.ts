import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { WordsService } from '../words.service';
import { DefinitionService } from '../definition.service';

import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers';

@Component({
  selector: 'app-definition',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.css']
})
export class DefinitionComponent implements OnInit {
  searchTerm: Observable<string>;
  definition: Observable<string>;

  constructor(
    private wordsService: WordsService,
    private store: Store<fromRoot.State>
  ) {
    this.definition = store.select(state => state.search.results);
    this.searchTerm = store.select(state => state.search.searchTerm);
   }

   postWord() {
     this.wordsService.saveWord({
       word: this.searchTerm,
       definition: this.definition
     })
     .subscribe(
      res => res,
      err => console.log(err));
   }

  ngOnInit() {
  }

}

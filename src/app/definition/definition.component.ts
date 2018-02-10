import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { WordsService } from '../words.service';
import { DefinitionService } from '../definition.service';

import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers';
import * as WordActions from '../actions/words';

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
    this.definition = store.select(fromRoot.getDefinitions);
    this.searchTerm = store.select(fromRoot.getWords);
   }

   postWord() {
     console.log(this.searchTerm, this.definition);
    //  this.wordsService.saveWord({
    //    word: this.searchTerm,
    //    definition: this.definition
    //  })
    //  .subscribe(res => {
    //    this.store.dispatch(new WordActions.AddWord(res));
    //   },
    //   err => console.log(err));
   }

  ngOnInit() {
  }

}

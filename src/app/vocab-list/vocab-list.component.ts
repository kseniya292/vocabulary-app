import { Component, OnInit } from '@angular/core';
import { WordsService } from '../words.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers';
import * as wordActions from '../actions/words';

import { Word } from '../word';

@Component({
  selector: 'app-vocab-list',
  templateUrl: './vocab-list.component.html',
  styleUrls: ['./vocab-list.component.css']
})
export class VocabListComponent implements OnInit {
  wordList$: Observable<any>;

  constructor(
    private wordsService: WordsService,
    private route: ActivatedRoute,
    private store: Store<fromRoot.State>
  ) {}


  deleteWord(id) {
      this.wordsService.deleteWord(id)
      .subscribe(res => res);
  }

//   removeWord(index: number) {
//     this.wordList$.splice(index, 1);
// }

  ngOnInit() {
    this.store.dispatch(new wordActions.GetWords());
    this.wordList$ = this.store.select(fromRoot.getWords);
  }

}

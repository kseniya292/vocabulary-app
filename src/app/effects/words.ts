import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import * as fromRoot from '../reducers';

import { Observable } from 'rxjs/Observable';
import { defer } from 'rxjs/observable/defer';
import { of } from 'rxjs/observable/of';
import { switchMap, toArray, map, catchError, mergeMap, withLatestFrom } from 'rxjs/operators';

import * as wordActions from '../actions/words';
import { WordsService } from '../words.service';
import { Word } from '../word';


@Injectable()
export class WordEffects {
  constructor(
    private actions$: Actions,
    private wordsService: WordsService,
    private state$: Store<fromRoot.State>
  ) { }

  @Effect() post$: Observable<Action> = this.actions$.pipe(
    ofType<wordActions.AddWord>(wordActions.ADD_WORD),
    withLatestFrom(this.state$),
    mergeMap(([action, state]) =>
      this.wordsService.saveWord({
        word: state.search.word,
        definition: state.search.definition
      }).pipe(
        // If successful, dispatch success action with result
        map((data: Word) => new wordActions.AddWordSuccess(data)),
        // If request fails, dispatch failed action
        catchError(() => of(new wordActions.RemoveWordFail({})))
      )
    )
  );
}

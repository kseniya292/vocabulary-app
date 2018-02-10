import { Action } from '@ngrx/store';
import { Word } from '../word';

// action types
export const SEARCH = '[Search] Definition';
export const SEARCH_SUCCESS = '[Search] Definition Success';

export class Search implements Action {
    readonly type = SEARCH;
    constructor(public payload: string) {}
  }

  export class SearchSuccess implements Action {
    readonly type = SEARCH_SUCCESS;

    constructor(public payload: Word) {}
  }

  export type Actions
    = Search
    | SearchSuccess;

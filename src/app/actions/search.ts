import { Action } from '@ngrx/store';

// action types
export const SEARCH = '[Search] Search Definition';
export const SEARCH_SUCCESS = '[Search] Search Definition Success';

export class Search implements Action {
    readonly type = SEARCH;
    constructor(public payload: string) {}
  }

  export class SearchSuccess implements Action {
    readonly type = SEARCH_SUCCESS;

    constructor(public payload: string) {}
  }

  export type Actions
    = Search
    | SearchSuccess;

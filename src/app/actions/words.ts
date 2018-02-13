import { Action } from '@ngrx/store';
import { Word } from '../word';

// action types
export const GET_WORDS = '[Word] Get Words';
export const GET_WORDS_SUCCESS = '[Word] Get Words Success';
export const GET_WORDS_FAIL = '[Word] Get Words Fail';
export const ADD_WORD = '[Word] Add Word';
export const ADD_WORD_SUCCESS = '[Word] Add Word Success';
export const ADD_WORD_FAIL = '[Word] Add Word Fail';
export const REMOVE_WORD = '[Word] Remove Word';
export const REMOVE_WORD_SUCCESS = '[Word] Remove Word Success';
export const REMOVE_WORD_FAIL = '[Word] Remove Word Fail';

/**
 * Get Words Actions
 */
export class GetWords implements Action {
  readonly type = GET_WORDS;
}

export class GetWordsSucess implements Action {
  readonly type = GET_WORDS_SUCCESS;

  constructor(public payload: Word[]) { }
}

export class GetWordsFail implements Action {
  readonly type = GET_WORDS_FAIL;

  constructor(public payload: any) { }
}


/**
 * Add Word to Word Actions
 */
export class AddWord implements Action {
  readonly type = ADD_WORD;

  constructor(public payload: Word) {}
}

export class AddWordSuccess implements Action {
  readonly type = ADD_WORD_SUCCESS;

  constructor(public payload: Word) {}
}

export class AddWordFail implements Action {
  readonly type = ADD_WORD_FAIL;

  constructor(public payload: any) {}
}

/**
 * Remove Word from Word Actions
 */
export class RemoveWord implements Action {
  readonly type = REMOVE_WORD;

  constructor(public payload: Word) {}
}

export class RemoveWordSuccess implements Action {
  readonly type = REMOVE_WORD_SUCCESS;

  constructor(public payload: Word) {}
}

export class RemoveWordFail implements Action {
  readonly type = REMOVE_WORD_FAIL;

  constructor(public payload: any) {}
}

export type Actions =
  | GetWords
  | GetWordsSucess
  | GetWordsFail
  | AddWord
  | AddWordSuccess
  | AddWordFail
  | RemoveWord
  | RemoveWordSuccess
  | RemoveWordFail;

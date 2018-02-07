import { Action } from '@ngrx/store';
import { Word } from '../word';

// action types
export const ADD_WORD = '[Word] Add Word';
export const ADD_WORD_SUCCESS = '[Word] Add Word Success';
export const ADD_WORD_FAIL = '[Word] Add Word Fail';
export const REMOVE_WORD = '[Word] Remove Word';
export const REMOVE_WORD_SUCCESS = '[Word] Remove Word Success';
export const REMOVE_WORD_FAIL = '[Word] Remove Word Fail';
export const LOAD = '[Word] Load';
export const LOAD_SUCCESS = '[Word] Load Success';
export const LOAD_FAIL = '[Word] Load Fail';

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

  constructor(public payload: Word) {}
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

  constructor(public payload: Word) {}
}

/**
 * Load Word Actions
 */
export class Load implements Action {
  readonly type = LOAD;
}

export class LoadSuccess implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: Word[]) {}
}

export class LoadFail implements Action {
  readonly type = LOAD_FAIL;

  constructor(public payload: any) {}
}

export type Actions =
  | AddWord
  | AddWordSuccess
  | AddWordFail
  | RemoveWord
  | RemoveWordSuccess
  | RemoveWordFail
  | Load
  | LoadSuccess
  | LoadFail;

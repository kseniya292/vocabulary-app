import * as WordActions from '../actions/words';
import { Word } from '../word';

export interface State {
    // loaded: boolean;
    // loading: boolean;
    // ids: string[];
    words: Word[];
  }

  // need to give state an initial state

export const initialState: State = {
    // loaded: false,
    // loading: false,
    // ids: [],
    words: [],
  };

  export function reducer(
    state = initialState,
    action: WordActions.Actions
  ): State {
    switch (action.type) {
      case WordActions.ADD_WORD: {
          return {
              ...state,
              words: [...state.words.slice(), action.payload],
          };
      }

      default: {
        return state;
      }
    }
  }

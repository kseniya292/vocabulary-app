import * as WordActions from '../actions/words';
import { Word } from '../word';

export interface State {
    loaded: boolean;
    loading: boolean;
    // ids: string[];
    words: Word[];
  }

  // need to give state an initial state

export const initialState: State = {
    loaded: false,
    loading: false,
    // ids: [],
    words: [],
  };

  export function reducer(
    state = initialState,
    action: WordActions.Actions
  ): State {
    switch (action.type) {
      case WordActions.GET_WORDS: {
        return Object.assign({}, state, {
          loading: true
        });
      }

      case WordActions.GET_WORDS_SUCCESS: {
        const books = action.payload;

        return {
          loaded: true,
          loading: false,
          words: [...action.payload],
        };
      }
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

  export const getWords = (state: State) => state.words;

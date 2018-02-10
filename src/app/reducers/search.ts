import * as search from '../actions/search';
import { Word } from '../word';

export interface State {
  word: string;
  definition: string;
}

// need to give state an initial state
export const initialState: State = {
    word: '',
    definition: ''
};

export function reducer(state = initialState, action: search.Actions): State {
  switch (action.type) {
    case search.SEARCH: {
      return {
        ...state,
        word: action.payload
      };
    }
    case search.SEARCH_SUCCESS: {
      return {
        ...state,
        word: action.payload.word,
        definition: action.payload.definition
      };
    }
    default:
      return state;
  }
}

export const getWord = (state: State) => state.word;

export const getDefinition = (state: State) => state.definition;

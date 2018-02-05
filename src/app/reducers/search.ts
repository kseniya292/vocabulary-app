import * as search from '../actions/search';

export interface State {
  searchTerm: string;
  results: string;
}

// need to give state an initial state
export const initialState: State = {
    searchTerm: '',
    results: ''
};

export function reducer(state = initialState, action: search.Actions): State {
  switch (action.type) {
    case search.SEARCH: {
      return {
        ...state,
        searchTerm: action.payload
      };
    }
    case search.SEARCH_SUCCESS: {
      return {
        ...state,
        results: action.payload
      };
    }
    default:
      return state;
  }
}

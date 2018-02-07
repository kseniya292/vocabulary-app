import * as words from '../actions/words';

export interface State {
    loaded: boolean;
    loading: boolean;
    ids: string[];
  }

  // need to give state an initial state

export const initialState: State = {
    loaded: false,
    loading: false,
    ids: [],
  };

  export function reducer(
    state = initialState,
    action: words.Actions
  ): State {
    switch (action.type) {
      case words.LOAD: {
        return {
          ...state,
          loading: true,
        };
      }

      case words.LOAD_SUCCESS: {
        return {
          loaded: true,
          loading: false,
          ids: action.payload.map(word => word.id),
        };
      }

      case words.ADD_WORD_SUCCESS:
      case words.REMOVE_WORD_FAIL: {
        if (state.ids.indexOf(action.payload.id) > -1) {
          return state;
        }

        return {
          ...state,
          ids: [...state.ids, action.payload.id],
        };
      }

      case words.REMOVE_WORD_SUCCESS:
      case words.ADD_WORD_FAIL: {
        return {
          ...state,
          ids: state.ids.filter(id => id !== action.payload.id),
        };
      }

      default: {
        return state;
      }
    }
  }

  export const getLoaded = (state: State) => state.loaded;

  export const getLoading = (state: State) => state.loading;

  export const getIds = (state: State) => state.ids;

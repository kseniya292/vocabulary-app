import {
    ActionReducerMap,
    createSelector,
    MetaReducer,
    createFeatureSelector,
    ActionReducer,
  } from '@ngrx/store';
  import { environment } from '../../environments/environment';

  /**
   * Every reducer module's default export is the reducer function itself. In
   * addition, each module should export a type or interface that describes
   * the state of the reducer plus any selector functions. The `* as`
   * notation packages up all of the exports into a single object.
   */

  import * as fromSearch from './search';

  /**
   * As mentioned, we treat each reducer like a table in a database. This means
   * our top level state interface is just a map of keys to inner state types.
   */
  export interface State {
    search: fromSearch.State;
  }

  /**
   * Our state is composed of a map of action reducer functions.
   * These reducer functions are called with each dispatched action
   * and the current or initial state and return a  immutable state.
   */
  export const reducers: ActionReducerMap<State> = {
    search: fromSearch.reducer,
  };


    // make sure you export for AoT
  export function stateSetter(reducer: ActionReducer<State>): ActionReducer<any, any> {
    return function(state: any, action: any): State {
        console.log('state', state); // tslint:disable-line:no-console
        console.log('action', action); // tslint:disable-line:no-console
        if (action.type === 'SET_ROOT_STATE') {
            return action.payload;
        }
        return reducer(state, action);
    };
  }

  /**
   * By default, @ngrx/store uses combineReducers with the reducer map to compose
   * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
   * that will be composed to form the root meta-reducer.
   */
  export const metaReducers: MetaReducer<any, any>[] = !environment.production
    ? [stateSetter] : [stateSetter];

  // if ( !environment.production ) {
  //     _metaReducers.push( debugMetaReducer );
  // }

  /**
   * Search Reducer Selectors
   */
  // export const getSearchState = createFeatureSelector<fromSearch.State>('search');

  // export const getImageURL = createSelector(
  //   getSearchState,
  //   fromSe
  // );

  // export const getImageLoading = createSelector(
  //   getSearchState,
  //   fromSearch.getImageLoading
  // );

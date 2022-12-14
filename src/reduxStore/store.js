import sortGenreReducer from './sortGenre';
import isSortReducer from './isSort';
import isSearchReducer from './isSearch';
import searchGameReducer from './searchGame';
import { combineReducers, createStore } from 'redux';

const rootReducer = combineReducers({
  sortGenre: sortGenreReducer,
  isSort: isSortReducer,
  searchGame: searchGameReducer,
  isSearch: isSearchReducer,
});

const store = createStore(rootReducer);

export default store;

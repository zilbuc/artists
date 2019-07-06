import { combineReducers } from 'redux';
import getEvents from './getEvents';
import findArtist from './findArtist';
import searchField from './searchField';

const rootReducer = combineReducers({
  findArtist,
  getEvents,
  searchField
})

export default rootReducer;

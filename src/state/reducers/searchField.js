import * as ACTION_TYPES from '../actions/actionTypes';

const initialState = { searchField: '' }

const searchFieldReducer = (state=initialState, action={}) => {
  switch(action.type) {
    case ACTION_TYPES.SEARCHFIELD:
      return Object.assign({}, state, { searchField : action.payload });
    default:
      return state;
  }
}

export default searchFieldReducer;

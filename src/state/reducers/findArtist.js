import * as ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  isPendingArtist: false,
  artist: [],
  errorArtist: ''
}

const findArtist = (state=initialState, action={}) => {
  switch(action.type) {
    case ACTION_TYPES.ARTIST_PENDING:
      return Object.assign({}, state, { isPendingArtist: true });
    case ACTION_TYPES.ARTIST_SUCCESS:
      return Object.assign({}, state, { isPendingArtist: false, artist: action.payload });
    case ACTION_TYPES.ARTIST_FAILURE:
      return Object.assign({}, state, { isPendingArtist: false, errorArtist: action.payload });
    default:
      return state;
  }
}

export default findArtist;

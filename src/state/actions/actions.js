import * as ACTION_TYPES from './actionTypes';

export const searchField = (text) => ({
  type: ACTION_TYPES.SEARCHFIELD,
  payload: text
});

export const findArtist = (artist) => (dispatch) => {
  dispatch({ type: ACTION_TYPES.ARTIST_PENDING });
  fetch(`https://rest.bandsintown.com/artists/${artist}?app_id=string`)
    .then(response => response.json())
    .then(data => dispatch({
      type: ACTION_TYPES.ARTIST_SUCCESS,
      payload: data
    }))
    .catch(err => dispatch({
      type: ACTION_TYPES.ARTIST_FAILURE,
      payload: err
    }))
}

export const getEvents = (artist) => (dispatch) => {
  dispatch({ type: ACTION_TYPES.EVENTS_PENDING });
  fetch(`https://rest.bandsintown.com/artists/${artist}/events?app_id=string`)
    .then(response => response.json())
    .then(data => dispatch({
      type: ACTION_TYPES.EVENTS_SUCCESS,
      payload: data
    }))
    .catch(err => dispatch({
      type: ACTION_TYPES.EVENTS_FAILURE,
      payload: err
    }))
}

import * as ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  isPendingEvents: false,
  events: [],
  errorEvents: ''
}

const getEvents = (state=initialState, action={}) => {
  switch(action.type) {
    case ACTION_TYPES.EVENTS_PENDING:
      return Object.assign({}, state, { isPendingEvents: true });
    case ACTION_TYPES.EVENTS_SUCCESS:
      return Object.assign({}, state, { isPendingEvents: false, events: action.payload });
    case ACTION_TYPES.EVENTS_FAILURE:
      return Object.assign({}, state, { isPendingEvents: false, errorEvents: action.payload });
    default:
      return state;
  }
}

export default getEvents;

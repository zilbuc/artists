import rootReducer from '../../state/reducers';
import searchFieldReducer from '../../state/reducers/searchField';
import findArtistReducer from '../../state/reducers/findArtist';
import getEventsReducer from '../../state/reducers/getEvents';
import * as ACTION_TYPES from '../../state/actions/actionTypes';

describe('RootReducer', () => {

  const initialState = {
    findArtist: {
      isPendingArtist: false,
      artist: {},
      errorArtist: ''
    },
    getEvents: {
      isPendingEvents: false,
      events: [],
      errorEvents: ''
    },
    searchField: {}
  };

  it('handles actions of type SEARCHFIELD', () => {
    const action = {
      type: ACTION_TYPES.SEARCHFIELD,
      payload: 'test string'
    }
    const expectedState = {
      findArtist: {
        isPendingArtist: false,
        artist: {},
        errorArtist: ''
      },
      getEvents: {
        isPendingEvents: false,
        events: [],
        errorEvents: ''
      },
      searchField: { searchField: 'test string' }
    };

    const newState = rootReducer(initialState, action);

    expect(newState).toEqual(expectedState);
  });

  it('handles actions of type ARTIST_SUCCESS', () => {
    const action = {
      type: ACTION_TYPES.ARTIST_SUCCESS,
      payload: { id: '15', name: 'Nick Cave' }
    }
    const expectedState = {
      findArtist: {
        isPendingArtist: false,
        artist: { id: '15', name: 'Nick Cave' },
        errorArtist: ''
      },
      getEvents: {
        isPendingEvents: false,
        events: [],
        errorEvents: ''
      },
      searchField: {}
    };

    const newState = rootReducer(initialState, action);

    expect(newState).toEqual(expectedState);
  });

  it('handles actions of type EVENTS_SUCCESS', () => {
    const action = {
      type: ACTION_TYPES.EVENTS_SUCCESS,
      payload: [ { id: '15', venue: { country: 'Italy', city: 'Rome' } } ]
    }
    const expectedState = {
      findArtist: {
        isPendingArtist: false,
        artist: {},
        errorArtist: ''
      },
      getEvents: {
        isPendingEvents: false,
        events: [ { id: '15', venue: { country: 'Italy', city: 'Rome' } } ],
        errorEvents: ''
      },
      searchField: {}
    };

    const newState = rootReducer(initialState, action);

    expect(newState).toEqual(expectedState);
  });

  it('handles action with unknown type', () => {
    const action = {
      type: ACTION_TYPES.NOT_AN_ACTION,
      payload: 'test string'
    }

    const newState = rootReducer(initialState, action);

    expect(newState).toEqual(initialState);

  });
});

describe('SearchField reducer', () => {
  it('handles actions of type SEARCHFIELD', () => {
    const action = {
      type: ACTION_TYPES.SEARCHFIELD,
      payload: 'test string'
    }

    const newState = searchFieldReducer({}, action);

    expect(newState).toEqual({ searchField: 'test string' });
  });

  it('handles action with unknown type', () => {
    const action = {
      type: ACTION_TYPES.NOT_AN_ACTION,
      payload: 'test string'
    }

    const newState = searchFieldReducer({}, action);

    expect(newState).toEqual({});

  });
});

describe('FindArtist reducer', () => {
  it('handles ARTIST_PENDING action', () => {
      const action = {
        type: ACTION_TYPES.ARTIST_PENDING
      };

      const newState = findArtistReducer({}, action);

      expect(newState).toEqual({ isPendingArtist: true });
  });

  it('handles ARTIST_FAILURE action', () => {
    const action = {
      type: ACTION_TYPES.ARTIST_FAILURE,
      payload: 'error'
    };

    const newState = findArtistReducer({}, action);

    expect(newState).toEqual({ isPendingArtist: false, errorArtist: 'error' });
  });
});

describe('GetEvents reducer', () => {
  it('handles EVENTS_PENDING action', () => {
      const action = {
        type: ACTION_TYPES.EVENTS_PENDING
      };

      const newState = getEventsReducer({}, action);

      expect(newState).toEqual({ isPendingEvents: true });
  });

  it('handles EVENTS_FAILURE action', () => {
    const action = {
      type: ACTION_TYPES.EVENTS_FAILURE,
      payload: 'error'
    };

    const newState = getEventsReducer({}, action);

    expect(newState).toEqual({ isPendingEvents: false, errorEvents: 'error' });
  });
});

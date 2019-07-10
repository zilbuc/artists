import React from 'react';
import * as ACTION_TYPES from '../../state/actions/actionTypes';
import { searchField, findArtist, getEvents } from '../../state/actions/actions';
import { render, cleanup } from '@testing-library/react';
import 'jest-dom/extend-expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

afterEach(cleanup);

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('searchField', () => {
  it('has the correct type', () => {
    const action = searchField();

    expect(action.type).toEqual('SEARCHFIELD');
  });

  it('has the correct payload', () => {
    const action = searchField('Tom Waits');

    expect(action.payload).toEqual('Tom Waits');
  });
});

describe('findArtist', () => {
  it('expected actions should be dispatched on successful request', () => {
    const store = mockStore({});

    const artist = { id: 1, name: 'Nick Cave' } ;
    const expectedActions = [
      { type: 'ARTIST_PENDING' },
      { type: 'ARTIST_SUCCESS', payload: artist }
    ];

    fetchMock.get('*', artist);

    return store.dispatch(findArtist())
      .then(() => {
        const actualActions = store.getActions()
        expect(actualActions).toEqual(expectedActions)
     })

    fetchMock.restore();
  });

  it('expected actions should be dispatched on failed request', () => {
    const store = mockStore({});

    const expectedActions = [
      { type: 'ARTIST_PENDING' },
      { type: 'ARTIST_FAILURE', payload: 'mock error' }
    ];

    // To make test fail:
    // fetchMock.get('*', { data: 'not an error' }, { overwriteRoutes: true });
    fetchMock.get('*', { throws: 'mock error' }, { overwriteRoutes: true });

    return store.dispatch(findArtist())
      .then(() => {
        const actualActions = store.getActions()
        expect(actualActions).toEqual(expectedActions)
      })

    fetchMock.restore();
    });
});

describe('getEvents', () => {
  it('expected actions should be dispatched on successful request', () => {
    const store = mockStore({});

    const events = [
      { id: 1, datetime: '2019-09-12', venue: { name: 'Another Festival', country: 'Spain', city: 'Sevilla' } },
      { id: 2, datetime: '2019-12-31', venue: { name: 'New Year Celebration', country: 'USA', city: 'New York' } }
    ];
    const expectedActions = [
      { type: 'EVENTS_PENDING' },
      { type: 'EVENTS_SUCCESS', payload: events }
    ];

    fetchMock.get('*', events, { overwriteRoutes: true });

    return store.dispatch(getEvents())
      .then(() => {
        const actualActions = store.getActions()
        expect(actualActions).toEqual(expectedActions)
     })

    fetchMock.restore();
  });

  it('expected actions should be dispatched on failed request', () => {
    const store = mockStore({});

    const expectedActions = [
      { type: 'EVENTS_PENDING' },
      { type: 'EVENTS_FAILURE', payload: 'mock error' }
    ];

    // To make test fail:
    // fetchMock.get('*', { data: 'not an error' }, { overwriteRoutes: true });
    fetchMock.get('*', { throws: 'mock error' }, { overwriteRoutes: true });

    return store.dispatch(getEvents())
      .then(() => {
        const actualActions = store.getActions()
        expect(actualActions).toEqual(expectedActions)
      })

    fetchMock.restore();
    });

});

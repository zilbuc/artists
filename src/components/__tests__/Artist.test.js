import React from 'react';
import { render, cleanup } from '@testing-library/react';
import 'jest-dom/extend-expect';
import Artist from '../HomePageComponents/Artist';

afterEach(cleanup);

describe('EventDetails', () => {

  const artist = {
    name: 'Test Name',
    image_url: 'https://s3.amazonaws.com/bit-photos/large/9053183.jpeg',
    facebook_page_url: 'http://www.facebook.com/7220821999',
    upcoming_event_count: 20
  };

  const events = [
    { id: 1, datetime: '2019-08-12', venue: { name: 'Sziget Festival', country: 'Hungary', city: 'Budapest' } },
    { id: 2, datetime: '2019-09-12', venue: { name: 'Another Festival', country: 'Spain', city: 'Sevilla' } },
    { id: 3, datetime: '2019-12-31', venue: { name: 'New Year Celebration', country: 'USA', city: 'New York' } }
  ];

  it('correctly renders all events and rerenders updated events', () => {

    const { getAllByTestId, rerender } = render(<Artist artistData={artist} eventData={events}/>);

    expect(getAllByTestId('event-name').length).toBe(3);

    const updatedEvents = [
      { id: 1, datetime: '2019-09-12', venue: { name: 'Another Festival', country: 'Spain', city: 'Sevilla' } },
      { id: 2, datetime: '2019-12-31', venue: { name: 'New Year Celebration', country: 'USA', city: 'New York' } }
    ];

    rerender((<Artist artistData={artist} eventData={updatedEvents}/>));

    expect(getAllByTestId('event-name').length).toBe(2);

  });

  it(`correctly displays 'search not found' error`, () => {

    const { getByText, getByTestId, rerender } = render(<Artist artistData={artist} eventData={events}/>)

    expect(getByTestId('not-found')).not.toHaveTextContent('Nothing found, please enter an artist and try again!');

    const artistNotFound = { error: 'not found' };

    rerender(<Artist artistData={artistNotFound} eventData={events}/>);

    expect(getByTestId('not-found')).toBeVisible();
    expect(getByText('Nothing found, please enter an artist and try again!')).toBeVisible();
  });
});

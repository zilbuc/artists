import React from 'react';
import { render, cleanup } from '@testing-library/react';
import 'jest-dom/extend-expect';
import EventDetails from '../HomePageComponents/EventDetails';

afterEach(cleanup);

describe('EventDetails', () => {

  const event = {
    datetime: '2019-08-12',
    venue: {
      name: 'Sziget Festival',
      country: 'Hungary',
      city: 'Budapest'
    }
  }

  it('renders the component with props', () => {

    const { getByText } = render(<EventDetails event={event}/>)

    expect(getByText('Sziget Festival')).toBeInTheDocument();
    expect(getByText('Budapest, Hungary')).toBeVisible();
  });

  it('rerenders the component with new props', () => {

    const { getByText, getByTestId, rerender } = render(<EventDetails event={event}/>)

    const updatedEvent = {
      datetime: '2019-12-31',
      venue: {
        name: 'New Year 2020',
        country: 'USA',
        city: 'New York'
      }
    }

    rerender(<EventDetails event={updatedEvent}/>);

    expect(getByTestId('event-name')).not.toHaveTextContent('Sziget');
    expect(getByTestId('event-name')).toHaveTextContent('2020');
    expect(getByText('New York, USA')).toBeInTheDocument();
    expect(getByText('2019-12-31')).toBeVisible();
  });
});

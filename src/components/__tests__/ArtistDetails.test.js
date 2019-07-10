import React from 'react';
import { render, cleanup } from '@testing-library/react';
import 'jest-dom/extend-expect';
import ArtistDetails from '../HomePageComponents/ArtistDetails';

afterEach(cleanup);

describe('ArtistDetails', () => {

  const artist = {
    name: 'Test Name',
    image_url: 'https://s3.amazonaws.com/bit-photos/large/9053183.jpeg',
    facebook_page_url: 'http://www.facebook.com/7220821999',
    upcoming_event_count: 20
  }

  it('renders the component with props', () => {

    const { getByText, getByTestId, getByAltText } = render(<ArtistDetails artist={artist}/>)

    expect(getByText('Test Name')).toBeInTheDocument();
    expect(getByAltText('artist_image')).toBeInTheDocument();
    expect(getByText(artist.facebook_page_url)).toBeInTheDocument();
    expect(getByTestId('upcoming_events')).toHaveTextContent('20');
  });

  it('rerenders the component with new props', () => {

    const { getByText, getByTestId, rerender } = render(<ArtistDetails artist={artist}/>)

    const updatedArtist = {
      name: 'Another Name',
      image_url: 'https://s3.amazonaws.com/bit-photos/large/9053183.jpeg',
      facebook_page_url: 'http://www.facebook.com/7220821999',
      upcoming_event_count: 7
    }

    rerender(<ArtistDetails artist={updatedArtist}/>);

    expect(getByTestId('upcoming_events')).not.toHaveTextContent('20');
    expect(getByText('Another Name')).toBeInTheDocument();
    expect(getByTestId('upcoming_events')).toHaveTextContent('7');
  });
});

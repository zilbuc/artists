import React from 'react';
import styled from 'styled-components';
import { styles } from '../../utils';

const ArtistDetails = ({ artist }) => {
  const { name, image_url, facebook_page_url, upcoming_event_count } = artist;

  return (
    <ArtistWrapper>
      <img src={image_url} alt='artist_image' className='img' />
      <div className='description'>
        <h3 className='name'>{ name }</h3>
        <h3 data-testid='upcoming_events' className='events'>Upcoming events: { upcoming_event_count }</h3>
        <a href={facebook_page_url} target='_blank' rel='noopener noreferrer'>{facebook_page_url}</a>
      </div>
    </ArtistWrapper>
  );
}

const ArtistWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 1rem;
  max-width: 90vw;
  .img {
    border-radius: 0.5rem;
    max-width: 80%;
  }
  .description {
    max-height: 300px;
  }
  .name {
    color: ${styles.colors.mainYellow};
    margin-top: 0.5rem;
    font-size: 1.35rem;
  }
  .vote {
    font-size: 1.1rem;
  }
  .overview {
    max-height: 150px;
    overflow: hidden;
  }
  @media (min-width:768px) {
    grid-template-columns: auto 1fr;
    .img {
      width: 500px;
    }
  }
`;

export default ArtistDetails;

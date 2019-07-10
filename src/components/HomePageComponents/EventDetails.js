import React from 'react';
import styled from 'styled-components';
import { styles } from '../../utils';

const EventDetails = ({ event }) => {
  const { datetime, venue } = event;
  const { name, country, city } = venue;

  return (
    <EventWrapper>
      <div className='description'>
        <h3 data-testid='event-name' className='name'>{ name }</h3>
        <h3 className='location'>{ city }, { country }</h3>
        <p className='date'>{ datetime.slice(0,10) }</p>
      </div>
    </EventWrapper>
  );
}

const EventWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 1rem;
  max-width: 90vw;
  .img {
    border-radius: 0.5rem;
    max-width: 300px;
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
  @media (min-width: 480px) {
    grid-template-columns: auto 1fr;
    .img {
      width: 200px;
    }
  }
`;

export default EventDetails;

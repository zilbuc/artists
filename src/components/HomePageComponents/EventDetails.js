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
        <h3 className='venue'>{ city }, { country }, { datetime.slice(0,10) }</h3>
      </div>
    </EventWrapper>
  );
}

const EventWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 1rem;
  max-width: 90vw;
  border-bottom: 0.5px dashed grey;
  .name {
    color: ${styles.colors.mainBlack};
    margin-top: 0.25rem;
    font-size: 1.35rem;
  }
  .venue {
    font-size: 1.1rem;
    color: ${styles.colors.mainGrey};
  }
  @media (min-width: 480px) {
    grid-template-columns: auto 1fr;
  }
`;

export default EventDetails;

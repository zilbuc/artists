import React from 'react';
import ArtistDetails from './ArtistDetails';
import EventDetails from './EventDetails';
import { styles, Section } from '../../utils';
import styled from 'styled-components';

const Artist = ({ artistData, artistDataError, artistDataPending, eventData, eventDataError, eventDataPending }) => {

  return (
    <Section>
      <EmptySearch className='search-again'>
        {
          (artistData.error || (!artistDataPending && artistData.length === 0)) && 'Nothing found, please enter an artist and try again!'
        }
      </EmptySearch>
      {
        (!artistData.error && artistData.length !== 0)
          &&  <React.Fragment>
                <ArtistDetails artist={artistData} />
                <EventList>
                  {
                    eventData.map(event => {
                      return <EventDetails key={event.id} event={event} />
                    })
                  }
                </EventList>
              </React.Fragment>
      }
    </Section>
  );
}

const EventList = styled.div`
  margin: 3rem 0;
  display: grid;
  grid-template-columns: 100%;
  grid-row-gap: 3rem;
  @media (min-width: 576px) {
    grid-template-columns: 95%;
  }
  @media (min-width: 768px) {
    grid-template-columns: 80%;
    justify-content: center;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
`;

const EmptySearch = styled.div`
  font-size: 1.2rem;
  color: ${styles.colors.mainBlack};
  text-align: center;
  margin-top: -35px;
`;

export default Artist;

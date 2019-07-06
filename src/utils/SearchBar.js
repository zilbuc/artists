import React from 'react';
import styled from 'styled-components';
import { styles, Section, SectionButton } from '../utils';

const SearchBar = ({ searchFieldChange, searchFieldSubmit }) => {
  return (
    <Section>
      <form onSubmit={searchFieldSubmit} >
        <SearchField
          type='search'
          placeholder='enter an artist'
          onChange={searchFieldChange}
        />
        <InputMessage className='input-error-message'>Please enter an artist!</InputMessage>
        <SectionButton type='submit'>
          Find artist
        </SectionButton>
      </form>
    </Section>
  );
}

const SearchField = styled.input`
  display: flex;
  margin: 0 auto;
  width: 90%;
  font-size: 1.3rem;
  padding: 3px 6px 2px;
  color: ${styles.colors.mainBlack};
  ${styles.border({ width: '0.08rem', color: `${styles.colors.mainBlack}` })};
  &:hover, &:focus {
    outline: none;
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`;

const InputMessage = styled.div`
  color: red;
  display: none;
  font-size: 12px;
  text-align: center;
`;

export { SearchBar };

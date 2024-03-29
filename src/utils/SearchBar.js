import React from 'react';
import styled from 'styled-components';
import { styles, Section, SectionButton } from '../utils';

const SearchBar = ({ searchField, searchFieldChange, searchFieldSubmit }) => {

  const searchFieldPlaceholder = searchField === '' ? '...' : searchField;

  return (
    <Section>
      <form data-testid='form' onSubmit={searchFieldSubmit} >
        <Label data-testid='label' htmlFor='artist-search'>Enter artist name:</Label>
        <SearchField
          id='artist-search'
          data-testid='searchField'
          type='search'
          name='searchField'
          value={searchField}
          placeholder={searchFieldPlaceholder}
          onChange={searchFieldChange}
        />
        <InputMessage data-testid='input-error-message' className='input-error-message'>Please enter an artist!</InputMessage>
        <SectionButton type='submit'>
          Find artist
        </SectionButton>
      </form>
    </Section>
  );
}

const Label = styled.label`
  display: flex;
  justify-content: center;
  font-size: 1.2rem;
  padding-bottom: 1rem;
`;

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

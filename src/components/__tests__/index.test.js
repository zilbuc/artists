import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent, cleanup } from '@testing-library/react';
import 'jest-dom/extend-expect';
import { StaticQuery, useStaticQuery } from 'gatsby';
import IndexPage from '../../pages';
import createStore from '../../state/createStore';

afterEach(cleanup);

const store = createStore();

function renderWithRedux(component) {
  return {
    ...render(<Provider store={store}>{ component }</Provider>)
  }
}

describe('IndexPage', () => {
  it('renders with redux', () => {
    const { queryByTestId, getByTestId, getByLabelText, getByText } = renderWithRedux(<IndexPage />);

    expect(getByText('home')).toBeVisible();
    expect(getByTestId('searchField')).toBeInTheDocument();
    expect(getByLabelText('Enter artist name:')).toBeInTheDocument();
    expect(getByText('Find artist')).toBeVisible();
    expect(queryByTestId('event-name')).not.toBeInTheDocument();
  });

  it('allows entering artist name in searchField', () => {
    const { getByTestId, getByLabelText } = renderWithRedux(<IndexPage />);

    expect(getByTestId('form')).toHaveFormValues({ searchField: ''});

    fireEvent.change(getByLabelText('Enter artist name:'), { target: { value: 'Opeth' } });

    expect(getByTestId('form')).toHaveFormValues({ searchField: 'Opeth' });
  });
});

import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import 'jest-dom/extend-expect';
import Navbar from '../globals/navbar/Navbar';
import NavbarHeader from '../globals/navbar/NavbarHeader';
import NavbarIcons from '../globals/navbar/NavbarIcons';
import NavbarLinks from '../globals/navbar/NavbarLinks';

afterEach(cleanup);

describe('Navbar', () => {
  it('renders NavbarHeader correctly', () => {
    const { asFragment } = render(<NavbarHeader />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('displays NavbarLinks links', () => {
    const { getByTestId, getByText } = render(<NavbarLinks />);

    expect(getByTestId('testid-link0')).toHaveTextContent('home');
    expect(getByText('about')).toBeVisible();
    expect(getByText('contact')).toBeInTheDocument();
  });

  it('displays NavbarIcons icons', () => {
    const { getByTestId, queryByTestId } = render(<NavbarIcons />);

    const ancestor = queryByTestId('icon-wrapper');
    const descendant = queryByTestId('testid-icon2');
    const nonExistantElement = queryByTestId('i-do-not-exist');

    expect(nonExistantElement).not.toBeInTheDocument();
    expect(getByTestId('testid-icon1')).toBeInTheDocument();
    expect(ancestor).toContainElement(descendant);
    expect(getByTestId('testid-icon3')).toBeInTheDocument();
  });

  it('has click icon that shows/hides NavbarLinks', () => {
    const { getByText, getByTestId } = render(<Navbar />);

    expect(getByTestId('navbar-icon')).toBeVisible();
    expect(getByTestId('links-wrapper')).toHaveStyle('height: 0px');

    fireEvent.click(getByTestId('navbar-icon'));

    expect(getByTestId('links-wrapper')).toHaveStyle('height: 120px');
  });
});

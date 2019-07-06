import React, { Component } from 'react';
import styled from 'styled-components';
import { styles } from '../../../utils';
import NavbarHeader from './NavbarHeader';
import NavbarLinks from './NavbarLinks';
import NavbarIcons from './NavbarIcons';

class Navbar extends Component {

  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    this.setState(() => {
      return { navbarOpen: !this.state.navbarOpen }
    })
  }

  render() {
    return (
      <NavWrapper>
        <NavbarHeader handleNavbar={this.handleNavbar}/>
        <NavbarLinks navbarOpen={this.state.navbarOpen}/>
        <NavbarIcons />
      </NavWrapper>
    );
  }

}

const NavWrapper = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  z-index: 1;
  background: ${styles.colors.mainWhite};
  @media (min-width: 992px) {
    display: flex;
    align-items: center;
  }
`
export default Navbar;

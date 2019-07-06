import React, { Component } from 'react';
import { Link } from 'gatsby';
import logo from '../../../images/fr logo png.png';
import { FaAlignRight } from 'react-icons/fa';
import styled from 'styled-components';
import { styles } from '../../../utils';

class NavbarHeader extends Component {

  render() {
    const { handleNavbar } = this.props;

    return (
      <HeaderWrapper>
        <Link to='/' >
          <img src={logo} alt='company name' />
        </Link>
        <FaAlignRight className='toggle-icon' onClick={() => handleNavbar() } />
        {/* </FaAlignRight> */}
      </HeaderWrapper>
    );
  }

}

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .toggle-icon {
    font-size: 1.75rem;
    color: ${styles.colors.mainYellow};
    cursor: pointer;
  }
  img {
    width: 200px;
    height: auto;
  }
  @media (min-width: 992px) {
    .toggle-icon {
      display: none;
    }
  }
`;

export default NavbarHeader;

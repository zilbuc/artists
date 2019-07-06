import React from "react"
import PropTypes from "prop-types"
import { createGlobalStyle } from 'styled-components';
import Navbar from './globals/navbar';
import Footer from './globals/Footer';

class Layout extends React.Component {

  render() {
    return (
      <React.Fragment>
        <GlobalStyles />
        <Navbar />
          {this.props.children}
        <Footer />
      </React.Fragment>
    )
  }
}

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Lato', 'Open Sans', sans-serif;
  }
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;

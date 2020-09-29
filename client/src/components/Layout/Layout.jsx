import React from 'react';
import PropTypes from 'prop-types';

// components
import { BaseCSS } from 'styled-bootstrap-grid';
import GlobalStyle from '../../GlobalStyle';
import Theme from '../../styles/themes/default';

const Layout = ({ children }) => (
  <Theme>
    <GlobalStyle />
    <BaseCSS />
    {children}
  </Theme>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.node])),
  ]).isRequired,
};

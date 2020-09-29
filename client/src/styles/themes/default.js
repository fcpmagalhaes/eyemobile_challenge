import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from 'styled-components';

export const theme = {
  colors: {
    charcoal: '#2f3838',
    blueGrey: '#848899',
    lightPeriwinkle: '#dfe0e6',
    paleGrey: '#fafafc',
    azure: '#0091ff',

    white: '#ffffff',
    background: '#F5F7FA',
    cell: '#E5E9EF',
    text: '#737689',
    textDark: '#4A4A4A',
    green: '#09CFA3',
    greenDark: '#049C7A',
  },
  sizes: {
    h1: '1.625rem',
    h2: '1.125rem',
    p: '0.9375rem',
  },
};

theme.buttonTypes = {
  primary: {
    backgroundColor: theme.colors.azure,
    color: theme.colors.white,
  },
  secondary: {
    backgroundColor: theme.colors.white,
    border: `solid 1px ${theme.colors.azure}`,
    color: theme.colors.azure,
  },
  link: {
    backgroundColor: 'transparent',
    padding: '8px',
    color: theme.colors.azure,
  },
};

const Theme = ({ children }) => React.createElement(ThemeProvider, { theme }, children);

export default Theme;

Theme.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.node])),
  ]).isRequired,
};

export const themePropTypes = PropTypes.shape({
  colors: PropTypes.objectOf(PropTypes.string).isRequired,
  sizes: PropTypes.objectOf(PropTypes.string).isRequired,
  buttonTypes: PropTypes.objectOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    ),
  ),
});

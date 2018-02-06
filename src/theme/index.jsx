import React from 'react';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

const themeObject = {
  palette: {
    primary: {
      light: '#5e92f3',
      main: '#1565c0',
      dark: '#003c8f',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffd149',
      main: '#ffa000',
      dark: '#c67100',
      contrastText: '#000',
    },
  },
};

const ThemeProvider = props => (
  <MuiThemeProvider
    {...props}
    theme={createMuiTheme(themeObject)}
  />
);

export default ThemeProvider;

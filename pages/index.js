import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import ErrorBoundary from '../src/components/ErrorBoundary';
import NoMovieFound from '../src/pages/NoMovieFound';
import theme from '../utils/theme.js';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ErrorBoundary>
          <NoMovieFound />
        </ErrorBoundary>
      </ThemeProvider>
    </>
  );
}

export default App;

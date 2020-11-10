import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import '@testing-library/jest-dom/extend-expect';
import AppWithHot from './app';

const mockStore = configureMockStore();

describe('router', () => {
  it('should navigate to no-movie-found page on load', () => {
    const store = mockStore({});
    const history = createMemoryHistory();
    render(
      <Provider store={store}>
        <Router history={history}>
          <AppWithHot />
        </Router>
      </Provider>
    );
    expect(screen.getByText(/no movie found/i)).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import NoMovieFound from './index';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}));

describe('MovieItem', () => {
  it('should display NoMovieFound', () => {
    render(<NoMovieFound />);
    const title = screen.getByText(/no movie found/i);
    expect(title).toBeInTheDocument();
  });
});

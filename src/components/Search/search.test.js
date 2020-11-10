import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import Search from './index';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}));

describe('Search', () => {
  it('should display Search', () => {
    render(<Search />);
    const title = screen.getByText(/find your movie/i);
    expect(title).toBeInTheDocument();
  });
});

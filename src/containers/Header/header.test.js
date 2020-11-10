import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import Header from './index';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}));

describe('Header', () => {
  it('should display Header', () => {
    render(<Header />);
    const title = screen.getByText(/add movie/i);
    expect(title).toBeInTheDocument();
  });
});

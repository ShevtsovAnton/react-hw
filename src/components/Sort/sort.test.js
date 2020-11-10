import { render, screen, fireEvent, within } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import Sort from './index';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}));

describe('Sort', () => {
  it('should display Sort', () => {
    render(<Sort />);
    const sort = screen.getByText(/sort by/i);
    expect(sort).toBeInTheDocument();
  });
});

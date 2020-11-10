import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import Filter from './index';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}));

describe('Filter', () => {
  it('should display Filter', () => {
    render(<Filter />);
    const filterItem = screen.getByText(/family/i);
    expect(filterItem).toBeInTheDocument();
  });
});

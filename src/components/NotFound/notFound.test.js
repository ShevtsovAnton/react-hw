import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import NotFound from './index';

const mockHistory = { push: jest.fn() };

jest.mock('react-router-dom', () => ({
  useHistory: jest.fn(() => mockHistory)
}));

describe('NotFound', () => {
  it('should display not found page', () => {
    render(<NotFound />);
    const text = screen.getByText(/not found/i);
    expect(text).toBeInTheDocument();
    const button = screen.getByText(/go back to home/i);
    expect(button).toBeInTheDocument();
  });

  it('should redirect to root', () => {
    render(<NotFound />);
    const button = screen.getByText(/go back to home/i);
    userEvent.click(button);
    expect(mockHistory.push).toHaveBeenCalledWith('/');
  });
});

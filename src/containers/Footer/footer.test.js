import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import Footer from './index';

describe('Footer', () => {
  it('should display Footer', () => {
    render(<Footer />);
    const title = screen.getByText(/roulette/i);
    expect(title).toBeInTheDocument();
  });
});

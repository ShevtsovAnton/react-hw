import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import Logo from './index';

describe('Logo', () => {
  it('should display logo', () => {
    render(<Logo />);
    const logo = screen.getByText(/netflix/i);
    expect(logo).toBeInTheDocument();
  });
});

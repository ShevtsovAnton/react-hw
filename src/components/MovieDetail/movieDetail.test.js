import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import MovieDetail from './index';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  useSelector: () => ({
    id: 612706,
    video: false,
    vote_count: 334,
    vote_average: 8.0,
    title: 'NEW TITLE',
    release_date: '2020-08-07'
  }),
  useDispatch: () => mockDispatch
}));

describe('MovieDetail', () => {
  it('should display MovieDetail', () => {
    render(<MovieDetail />);
    const backButton = screen.getByText(/go back/i);
    expect(backButton).toBeInTheDocument();
  });
});

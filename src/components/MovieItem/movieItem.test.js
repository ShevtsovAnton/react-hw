import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import '@testing-library/jest-dom';
import MovieItem from './index';

const setIsEditMode = jest.fn();
const setOpenAddEditModal = jest.fn();
const setOpenDeleteModal = jest.fn();
const setSelectedMovie = jest.fn();
const id = 612706;

const mockDispatch = jest.fn();
const mockMovie = {
  id: 612706,
  video: false,
  vote_count: 334,
  vote_average: 8.0,
  title: 'NEW TITLE',
  release_date: '2020-08-07',
  genres: ['comedy', 'drama']
};

jest.mock('react-redux', () => ({
  useSelector: () => mockMovie,
  useDispatch: () => mockDispatch
}));

describe('MovieItem', () => {
  it('should display MovieItem', () => {
    render(
      <BrowserRouter>
        <MovieItem
          setIsEditMode={setIsEditMode}
          setOpenAddEditModal={setOpenAddEditModal}
          setOpenDeleteModal={setOpenDeleteModal}
          setSelectedMovie={setSelectedMovie}
          id={id}
        />
      </BrowserRouter>
    );
    const title = screen.getByText(mockMovie.title);
    expect(title).toBeInTheDocument();
  });
});

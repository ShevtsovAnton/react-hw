import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import AddEditDialog from './index';

const selectedMovie = {
  id: 612706,
  video: false,
  vote_count: 334,
  vote_average: 8.0,
  title: 'NEW TITLE',
  release_date: '2020-08-07'
};
const setSelectedMovie = jest.fn();
const setOpenAddEditModal = jest.fn();

jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn()
}));

describe('AddEditDialog', () => {
  it('should display AddEditDialog in edit mode', () => {
    render(
      <AddEditDialog
        openAddEditModal={true}
        isEditMode={true}
        selectedMovie={selectedMovie}
        setSelectedMovie={setSelectedMovie}
        setOpenAddEditModal={setOpenAddEditModal}
      />
    );
    const title = screen.getByText(/edit movie/i);
    expect(title).toBeInTheDocument();
    const movieId = screen.getByText(/movie id/i);
    expect(movieId).toBeInTheDocument();
  });

  it('should display AddEditDialog in add movie mode', () => {
    render(
      <AddEditDialog
        openAddEditModal={true}
        isEditMode={false}
        selectedMovie={selectedMovie}
        setSelectedMovie={setSelectedMovie}
        setOpenAddEditModal={setOpenAddEditModal}
      />
    );
    const title = screen.getByText(/add movie/i);
    expect(title).toBeInTheDocument();
  });

  it('should close modal on close click', () => {
    render(
      <AddEditDialog
        openAddEditModal={true}
        isEditMode={false}
        selectedMovie={selectedMovie}
        setSelectedMovie={setSelectedMovie}
        setOpenAddEditModal={setOpenAddEditModal}
      />
    );
    const close = screen.getByRole('button', { name: 'close' });
    expect(close).toBeInTheDocument();
    userEvent.click(close);
    expect(setOpenAddEditModal).toHaveBeenCalledWith(false);
  });

  it('should reset title field value on button reset click', () => {
    render(
      <AddEditDialog
        openAddEditModal={true}
        isEditMode={true}
        selectedMovie={selectedMovie}
        setSelectedMovie={setSelectedMovie}
        setOpenAddEditModal={setOpenAddEditModal}
      />
    );
    const resetButton = screen.getByText(/reset/i);
    expect(resetButton).toBeInTheDocument();
    const titleField = screen.getByDisplayValue(selectedMovie.title);
    expect(titleField).toBeInTheDocument();
    userEvent.click(resetButton);
    expect(titleField).toHaveDisplayValue('');
  });

  it('should submit form on button submit click', () => {
    render(
      <AddEditDialog
        openAddEditModal={true}
        isEditMode={true}
        selectedMovie={selectedMovie}
        setSelectedMovie={setSelectedMovie}
        setOpenAddEditModal={setOpenAddEditModal}
      />
    );
    const submitButton = screen.getByText(/submit/i);
    expect(submitButton).toBeInTheDocument();
    userEvent.click(submitButton);
    expect(setOpenAddEditModal).toHaveBeenCalledWith(false);
  });
});

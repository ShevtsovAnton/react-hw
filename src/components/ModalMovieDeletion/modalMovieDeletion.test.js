import { render, screen } from '@testing-library/react';
import React from 'react';
// import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import ModalMovieDeletion from './index';

// import userEvent from "@testing-library/user-event";
// import {addFilm, loadFilms, setAddEditDialogOpen} from "../../../../store/slices";

const mockDispatch = jest.fn();
const closeModalMovieDeletion = jest.fn();
const mockSelectedMovie = {};

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}));

describe('ModalMovieDeletion', () => {
  it('should correctly set setAddEditDialogOpen on close', () => {
    render(
      <ModalMovieDeletion
        openDeleteModal={true}
        closeModalMovieDeletion={closeModalMovieDeletion}
        selectedMovie={mockSelectedMovie}
      />
    );

    const title = screen.queryByText(/delete movie/i);
    expect(title).toBeInTheDocument();
    const confirmMessage = screen.getByText(/are you sure/i);
    expect(confirmMessage).toBeInTheDocument();
    const confirmButton = screen.getByText(/confirm/i);
    expect(confirmButton).toBeInTheDocument();
    userEvent.click(confirmButton);
    expect(closeModalMovieDeletion).toHaveBeenCalled();
  });
});

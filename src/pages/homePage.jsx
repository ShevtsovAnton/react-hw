import React from 'react';

import MovieList from '../containers/MovieList';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
import moviesList from '../utils/data';
import { defaultMovie } from '../utils/misc';
import helpers from '../utils/helpers';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      isEditMode: false,
      openAddEditModal: false,
      openDeleteModal: false,
      selectedMovie: null
    };
  }

  componentDidMount() {
    this.setState({
      movies: [...moviesList]
    });
  }

  setMovies(movies) {
    this.setState({
      movies: [...movies]
    });
  }

  setIsEditMode(val) {
    this.setState({
      isEditMode: val
    });
  }

  setOpenAddEditModal(val) {
    this.setState({
      openAddEditModal: val
    });
  }

  setOpenDeleteModal(val) {
    this.setState({
      openDeleteModal: val
    });
  }

  setSelectedMovie(movie) {
    this.setState({
      selectedMovie: { ...movie }
    });
  }

  handleSearch = query => {
    if (query.trim() === '') {
      this.setMovies(moviesList);
      return;
    }
    const searchResults = moviesList.filter(movie =>
      movie.title.toUpperCase().includes(query.trim().toUpperCase())
    );
    this.setMovies(searchResults);
  };

  handleFilter = filter => {
    if (filter === 'all') {
      this.setMovies(moviesList);
      return;
    }
    const filteredList = moviesList.filter(movie => {
      const formattedGenres = movie.genres.map(genre => genre.toUpperCase());
      return formattedGenres.includes(filter.toUpperCase());
    });
    this.setMovies(filteredList);
  };

  handleSort = sortBy => {
    const { movies } = this.state;
    const sortedMovies = helpers.getSortedMovies(movies, sortBy);
    this.setState({
      movies: [...sortedMovies]
    });
  };

  deleteMovie() {
    const { movies } = this.state;
    const updatedMovieList = movies.filter(movie => movie.id !== this.selectedMovie.id);
    this.setMovies(updatedMovieList);
    this.setSelectedMovie(null);
  }

  editMovie(editedMovie) {
    const { movies } = this.state;
    const foundIndex = movies.findIndex(movie => movie.id === editedMovie.id);
    const updatedList = [
      ...movies.slice(0, foundIndex, 1),
      editedMovie,
      ...movies.slice(foundIndex + 1)
    ];
    this.setMovies(updatedList);
  }

  addMovie(movie) {
    const { movies } = this.state;
    const newMovie = { ...movie, id: new Date().getTime() };
    this.setMovies([...movies, newMovie]);
  }

  openModalAddMovie() {
    this.setSelectedMovie(defaultMovie);
    this.setIsEditMode(false);
    this.setOpenAddEditModal(false);
  }

  render() {
    const { isEditMode, openAddEditModal, openDeleteModal, selectedMovie, movies } = this.state;
    return (
      <>
        <Header handleSearch={this.handleSearch} handleClick={this.openModalAddMovie} />
        <MovieList
          movies={movies}
          handleSort={this.handleSort}
          handleFilter={this.handleFilter}
          isEditMode={isEditMode}
          setIsEditMode={this.setIsEditMode}
          openAddEditModal={openAddEditModal}
          setOpenAddEditModal={this.setOpenAddEditModal}
          openDeleteModal={openDeleteModal}
          setOpenDeleteModal={this.setOpenDeleteModal}
          deleteMovie={this.deleteMovie}
          selectedMovie={selectedMovie}
          setSelectedMovie={this.setSelectedMovie}
          editMovie={this.editMovie}
          addMovie={this.addMovie}
        />
        <Footer />
      </>
    );
  }
}

export default HomePage;
